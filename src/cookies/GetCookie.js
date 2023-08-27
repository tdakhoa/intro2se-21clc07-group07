import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";
import { userData } from "../redux/features/userSlice";

export default function GetCookie() {
    const dispatch = useDispatch();
    const uid = Cookies.get("uid");

    const executeCookie = async () => {
        const ref = collection(db, "users");
        const docSnap = await getDocs(ref);

        let exist = false;
        let premium = false;

        docSnap.forEach((doc) => {
            if (doc.id === uid) {
                premium = doc.data().premium;
                exist = true;
            }
        });

        if (exist) dispatch(userData({ uid: uid, premium: premium }));
        else dispatch(userData({}));
    };

    useEffect(() => {
        executeCookie();
    }, [uid]);

    return null;
}
