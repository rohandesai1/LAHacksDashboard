import requests as rq, numpy as np, random
from bs4 import BeautifulSoup as bs
import flask
import json
from flask_cors import CORS
from flask import Flask, render_template, request, json,jsonify



app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])


def main():
    if request.method == "POST":
        value = request.get_json(force = True)
        hackNums, numOfSamples = list(value.values()) # -> [hackathon number, number of samples]

        allSamples = [[],[],[],[]]

        for i in range(len(hackNums)):
            hackNum = hackNums[i]
            numOfSample = numOfSamples[i]  
            # [hackNum, numOfSample] -> [7,2] means get 2 projects from LA hacks 7

            devpost = Page(f"https://losaltoshacks{hackNum}.devpost.com/project-gallery")
            titles, taglines, thumbnails, links = devpost.data()
            sample = devpost.sample(numOfSample, titles, taglines, thumbnails, links) # sample random (top) projects
            for z in range(len(allSamples)):
                allSamples[z] += sample[z] # accumulate samples
        return json.dumps(allSamples) 





class Page:
    def __init__(self, link):
        r = rq.get(link)
        c = r.content
        self.s = bs(c, "html.parser")

    def _filter(self, text):
        filtered = []
        prevChar = ""
        for char in text:
            if (prevChar == " " and char == " ") or (char == "\n"): # if excess space or \n remove 
                pass
            else: 
                filtered.append(char)

            prevChar = char

        return "".join(filtered)

    
    def data(self):
        titles, taglines = self.titleTagline()
        pics = self.thumbnails()
        links = self.devLink()
        return titles, taglines, pics, links

    def thumbnails(self):
        imgSrcs = [val["src"]for val in self.s.find_all("img", {"class" : "software_thumbnail_image"})]
        return imgSrcs
    def devLink(self):
        onclick = [val.get("href") for val in self.s.find_all("a", {"class" : "link-to-software"})]
        return onclick
    
    def titleTagline(self):
        titleTaglines = [self._filter(val.text) for val in self.s.find_all("div", {"class" : "software-entry-name"})]
        titles = []
        taglines = []
        for i in range(len(titleTaglines)):
            item = titleTaglines[i]
            title, tagline = item.split("  ")[0:2] # is extracted in format ["title  (double space) description"] 
            titles.append(title)
            taglines.append(tagline)

        return titles, taglines

    def sample(self, numOfSamples, titles, taglines, thumbnails, links):
        possibleIndices = np.arange(24)
        indices = []
        for _ in range(numOfSamples):
            index = random.choice(possibleIndices)
            possibleIndices = np.delete(possibleIndices, index) # prevents duplicates
            indices.append(index)

        titles, taglines, thumbnails, links = np.asarray(titles), np.asarray(taglines), np.asarray(thumbnails), np.asarray(links) # convert to np array so can be indexed with list[list]
        sampled = list(titles[indices]), list(taglines[indices]), list(thumbnails[indices]), list(links[indices])
        return sampled
    

app.run(host='0.0.0.0', port=4000, debug=True)