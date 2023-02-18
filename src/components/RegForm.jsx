import { data } from 'autoprefixer';
import {
    getDocs,
    addDoc,
    collection,
    query,
    where
} from 'firebase/firestore';
import { useState } from 'react';
import { database } from '../../firebaseConfig';
import  Recaptcha  from 'react-google-recaptcha';

export default function RegForm(){   
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const databaseReference = collection(database, 'Beneficiaries');
    const [captcha, setCaptcha] = useState('');

    const handleCaptchaChange = (value) => {
        setCaptcha(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!captcha) {
            alert('Please verify that you are a human!');
            return;
        }
        addAndClear   
     }
    const checkIfExist = async () => {
        console.log("Checking if data exists...");
    
        const beneficiariesRef = query(databaseReference, 
            where("firstName", "==", firstName)
        );
    
        try {
            const beneficiariesSnapshot = await getDocs(beneficiariesRef);
    
            if (beneficiariesSnapshot.empty) {
                console.log("Data is empty, adding new record...");
                addData();
            } else {
                alert("Record already exists!");
                console.log("Data already exists, not adding record...");
            }
        } catch (error) {
            console.error("Error checking if data exists:", error);
        }
    };
    const isValidName = (name) => {
        const regex = /^[a-zA-Z\s]*$/; // only alphabetic characters and whitespace allowed
        return regex.test(name);
      }
    const addData = () => {
       
        addDoc(databaseReference, {
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            number: number,
            age: age,
            address: address
        })
        console.log(
            firstName,middleName,lastName,number,age,address
        );
        
    }
    
    const addAndClear = () =>{

        if(firstName == "" && middleName == "" && lastName == "" && number == "" && age == "" && address == ""){
         
           
            alert("Please fill up all information")
            setFirstName("");
            setMiddleName("");
            setLastName("");
            setNumber("");
            setAddress("");
            setAge("");
        }else{
            if (!isValidName(firstName) || !isValidName(middleName) || !isValidName(lastName)) {
                alert("Invalid name format. Please use only alphabetic characters and spaces.");
                return;
              }
            checkIfExist();
            console.log("checking if record exists");
        }
        
        setFirstName("");
        setMiddleName("");
        setLastName("");
        setNumber("");
        setAddress("");
        setAge("");
    
    }
    

    return(
<form>

<div 
  className="grid md:grid-cols-3 md:gap-6">
    <div 
    className="relative z-0 w-full mb-6 group">
        <input 
        type="text" 
        name="floating_first_name" 
        id="floating_first_name" 
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" "
        autoComplete="off"
        onChange={(event) => setFirstName(event.target.value)}
        value={firstName}
        required />
        <label 
        htmlFor="floating_first_name" 
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div 
    className="relative z-0 w-full mb-6 group">
        <input 
        type="text" 
        name="floating_middle_name" 
        id="floating_middle_name" 
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" "
        autoComplete="off" 
        onChange={(event) => setMiddleName(event.target.value)}
        value={middleName}
        required />
        <label 
        htmlFor="floating_middle_name" 
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Middle name</label>
    </div>
    <div 
    className="relative z-0 w-full mb-6 group">
        <input 
        type="text" 
        name="floating_last_name" 
        id="floating_last_name" 
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" "
        autoComplete="off"
        onChange={(event) => setLastName(event.target.value)}
        value={lastName}
        required />
        <label 
        htmlFor="floating_last_name" 
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  
  <div 
  className="grid md:grid-cols-2 md:gap-6">
    <div 
    className="relative z-0 w-full mb-6 group">
        <input 
        type="number" 
        pattern="[0-9]" 
        name="floating_phone" id="floating_phone" 
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" " 
        autoComplete="off"
        onChange={(event) => setNumber(event.target.value)}
        value={number}
        required />
        <label htmlFor="floating_phone" 
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Phone number (09123456789)</label>
    </div>
    <div 
    className="relative z-0 w-full mb-6 group">
        <input 
        type="number" 
        name="floating_age"
        id="floating_age" 
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" "
        onChange={(event) => setAge(event.target.value)}
        value={age}
        required
        autoComplete="off" 
        />
        <label htmlFor="floating_age" 
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Age</label>
    </div>
  </div>
  <div 
  className="relative z-0 w-full mb-6 group">
      <input 
      type="text" 
      name="floating_address" 
      id="floating_address" 
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
      placeholder=" "
      autoComplete="off"
      onChange={(event) => setAddress(event.target.value)}
    value={address}
      required />
      <label 
      htmlFor="floating_address" 
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
    Complete address</label>
    
  </div>
  <Recaptcha
                sitekey="6LfUqJEkAAAAAM-dMwTcbgL5-KGagz2ANvQc93-b"
                onChange={handleCaptchaChange}
            />
  <button data-modal-target="popup-modal" data-modal-toggle="popup-modal"
  type="button"
onClick={handleSubmit}
  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
  </button>
  
</form>
    )
}