import "./Form.css"
import { useForm } from "react-hook-form"

function Form() {
  const form = useForm({ 
    defaultValues: {
        username: "Asif",
        email: "i@me.com",
        country: "Turkey"
    }})
  const { register, handleSubmit, formState: {errors} } = form
//   const { name, onChange, ref, onBlur } = register("username")

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
    <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="username">Username</label>
                {/* <input type="text" name={name} ref={ref} onChange={onChange} onBlur={onBlur} placeholder="Enter username" id="username" /> */}
                <input 
                    type="text" 
                    id="username" 
                    placeholder="Enter username" 
                    { ...register("username", 
                        { required: { value: true, message: "Username is required."}}) 
                    }
                />
                <p>{ errors.username?.message }</p>
            </div>

            <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter email" 
                    { ...register("email", 
                        { required: { value: true, message: "email is required."}}) 
                    } 
                />
                <p>{ errors.email?.message }</p>
            </div>

            <div className="mb-3">
                <label htmlFor="country">Country</label>
                <input 
                    type="text" 
                    id="country" 
                    placeholder="Enter country" 
                    { ...register("country", 
                        { required: { value: true, message: "country is required."}}) 

                    } 
                />
                <p>{ errors.country?.message }</p>
            </div>

            <div>
                <input type="submit" value="click here to submit" />
            </div>
        </form>
    </div>

    </>
  )
}

export default Form