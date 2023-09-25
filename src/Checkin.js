import { db, auth } from "./databaseConfig";
import Authentication from "./auth";
import { useState, useEffect } from "react";
import { getDocs, collection, addDoc,  doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
export default function CheckIn(){
    const [checkIn, setCheckIn] = useState([]);
    const [signedIn, setSignIn] = useState(true)

    const checkInRef = collection(db, "checkedin");

    const getCheckInValue = async () => {
            try{
                const data = await getDocs(checkInRef);
                const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
                setCheckIn(filteredData);
                return filteredData;
            } catch(err) {
                console.error(err);
            }
        }
       
    useEffect(() => {
        getCheckInValue();
    })

    const checkingIn = async () => {
        try{
            const ids = await getCheckInValue();
            const id = auth?.currentUser?.uid;
            let match = false;
            for (let i = 0; i < ids.length; i++){
                if (id == ids[i]["uid"]){
                    console.log("match");
                    match = true;
                    await updateDoc(doc(db, "checkedin", ids[i].id), {in: true})


                }
            }
            if (!match){
                const checkInDoc = doc(db, )
                await addDoc(checkInRef, {in : true, personName : auth?.currentUser?.displayName, uid: id})
            }
        } catch(err){
            setSignIn(false);
            console.error(err)
        }

    }

    const checkingOut = async () => {
        try{
            const ids = await getCheckInValue();
            const id = auth?.currentUser?.uid
            let match = false;
            for (let i = 0; i < ids.length; i++){
                if (id == ids[i]["uid"]){
                    console.log("match");
                    match = true;

                    await updateDoc(doc(db, "checkedin", ids[i].id), {in: false})

                }
            }
            if (!match){
                await addDoc(checkInRef, {in : false, personName : auth?.currentUser?.displayName, uid: id})
            }
        } catch(err){
            setSignIn(false);
            console.error(err)
        }

    }


    return (
        
    <div>
        <div className="homeIcon">
            
        <Link to="/home"><img src="./lahacksicon.png" alt="icon" width="200"height="200"/> </Link>
        </div>
        {!signedIn && <div className="signinout">Please sign in.</div>}
        {signedIn && <div className="signinout"><h3 className="username">{auth?.currentUser?.displayName}'s</h3> Dashboard</div>}

        <Authentication></Authentication>

        <div>
            <div className="checkin">
                <button onClick={checkingIn}>Check In</button>
            </div>
            <div className="checkout">
                <button onClick={checkingOut}>Check Out </button>
            </div>
            {checkIn.map((item) => (

                <div>
                    <h1 className="personData">{item.personName}: {item.in ? "In" : "Out"}</h1>
                   


                </div>
            ))}
            
        </div>
    </div>
    )
}