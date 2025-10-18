import { useState } from 'react';
import styles from '../styles/Account.module.css'
import { useNavigate } from 'react-router-dom';

const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+./g, "");
const trimCollapse = (s) => String(s ?? "").trim().replace(/\s+/g, "");

const initialValues = {
    name: "",
    email: "",
    img: null,
}


const AddAccount = ({ addProfiles }) => {
    const [values, setValues] = useState(initialValues)
    const {name, email, img} = values;
    const [errors, setErrors] = useState("")
    const [isSubmitting, setSubmitting] = useState(false)
    const [success, setSuccess] = useState("")
    const [submittedProfile, setSubmittedProfile] = useState(null);


    const navigate = useNavigate()

    const onChange = (event) => {
        if(event.target.name === "image"){
            const file = event.target.files[0]
            if (file && file.size < 1024*1024) {
                setErrors ("");
                setValues(prev => ({...prev, img: file}));
            } else {
                setErrors ("File needs to be less than 1MB.");
                setValues((prev) => ({...prev, img: null}));
            }
        } else {
            setValues( (prev) => ({
                ...prev,
                [event.target.name]: event.target.value
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitting")
        setSubmitting(true);

        setSubmitting(true);
        try {
            const cleanedValues = {
                name: stripTags(trimCollapse(name)),
                email: stripTags(trimCollapse(email)),
                img: img ? URL.createObjectURL(img) : "",
            };
            setSubmittedProfile(cleanedValues);
            addProfiles(cleanedValues);
            
            setSuccess("Form has been submitted successfully.");
            setValues(initialValues);

            //event.currentTarget.reset();

            setTimeout(()=> {
                setSuccess("");
            }, 1000)
            //event.currentTarget.reset();
            //navigate("/")
        } catch(error) {
            setErrors("Something is wrong.")
        } finally {
            setSubmitting(false);
        }

    }


    return (
        <div className={styles.addNewProfile}>
            {!submittedProfile ? (
                <>
                    <h2>Don't have an account? Make one!</h2>
                    <form onSubmit={handleSubmit} className={styles.addProfileForm}>
                        <label htmlFor = "name">Name:</label>
                        <input type = "text" name = "name" id = "name" required value = {name} onChange = {onChange} />
                        <label htmlFor = "email">Email:</label>
                        <input type = "text" name = "email" id = "email" required value = {email} onChange = {onChange}/>
                        <label htmlFor = "image">Image:</label>
                        <input type = "file" name = "image" id = "image" onChange = {onChange}/>
                        <br></br>
                        <button className = {styles.submitButton}
                            type="submit" 
                            disabled={isSubmitting || 
                                !stripTags(trimCollapse(name)) || 
                                !stripTags(trimCollapse(email)) ||
                                !img
                            }
                            >Add Account</button>
                        {success && <p className="success">{success}</p>}

                    </form>
                </>
            ) : (
                <div className={styles.profileDisplay}>
                    <h2>Welcome, {submittedProfile.name}</h2>
                    <img src={submittedProfile.img} className={styles.profileImage} />
                    <p>Email: {submittedProfile.email}</p>
                </div>
            )}
            
        </div>
    )
}

export default AddAccount;