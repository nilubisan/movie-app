import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { onMounted } from "vue";


export const useInitFirebase = () => {
    onMounted(() => {
        const firebaseConfig = {
                  apiKey: "AIzaSyDdDForfHHAz5mY0nvuKP6YWfCgmtcj37U",
                  authDomain: "fir-sample-898fd.firebaseapp.com",
                  projectId: "fir-sample-898fd",
                  storageBucket: "fir-sample-898fd.appspot.com",
                  messagingSenderId: "343313224769",
                  appId: "1:343313224769:web:a0f794e57b44073be7e2c0"
              };
              const app = initializeApp(firebaseConfig);
              getAnalytics(app);
      })
}