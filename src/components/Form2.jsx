import { useForm } from "react-hook-form"
import "./Form.css"

function Form2() {
  const form  = useForm({
    // defaultValues: {
    //     username: "Asif",
    //     email: "i@me.com",
    //     password: "asif123"
    // }
  })

  const { register, handleSubmit, formState: {errors} } = form
  const handleFormData = (data) => {
    console.log(data)
  }

  return (
    <>
        <div className="container">
            <form onSubmit={handleSubmit(handleFormData)}>
                <div className="mb-3">
                    <label htmlFor="username">username</label>
                    <br />
                    {/* <input type="text" id="username" placeholder="username" {...register("username", { required: { value: true, message: "Username is required"} })} /> */}
                    <input 
                        type="text" 
                        id="username" 
                        placeholder="username" 
                        {...register("username", 
                                    { required: "Username is required.", minLength: { value:3, message: "atleast 3 letters."}} )} />
                    <p>{ errors.username?.message }</p>
                </div>

                <div className="mb-3">
                    <label htmlFor="email">email</label>
                    <br />
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="email" 
                        {...register("email", { required: "Email is required."})} 
                    />
                    <p>{ errors.email?.message}</p>
                </div>

                <div className="mb-3">
                    <label htmlFor="password">password</label>
                    <br />
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="password" 
                        {...register("password", { required: "Password is required."})} 
                    />
                    <p>{ errors.password?.message}</p>
                </div>


                <div className="mb-3">
                    <input type="radio" value={`male`}  {...register("gender", { required: "Gender is required."})} /> <label>Male</label>
                    {" "}
                    <input type="radio" value={`female`} {...register("gender", { required: "Gender is required."})} /><label>Female</label>
                    <p>{ errors.gender?.message}</p>
                </div>

                <div className="mb-3">
                    <input type="checkbox" value={`hockey`} {...register("hobbies", { required: "Hobbies are required."})} /><label>hockey</label>
                    <br />
                    <input type="checkbox" value={`cricket`} {...register("hobbies", { required: "Hobbies are required."})} /><label>cricket</label>
                    <br />
                    <input type="checkbox" value={`coding`} {...register("hobbies", { required: "Hobbies are required."})} /><label>coding</label>
                    <p>{ errors.hobbies?.message}</p>
                </div>
                
                <div className="mb-3">
                    <select  {...register("course", { required: "course is required."})} id="">
                        <option value="">Select an option</option>
                        <option value="php">PHP</option>
                        <option value="expressjs">Expressjs</option>
                        <option value="nestjs">Nest.js</option>
                        <option value="reactjs">React.js</option>
                    </select>
                    <p>{ errors.course?.message}</p>
                </div>

                <div>
                    <input type="submit" value="click to add form data" />
                </div>
            </form>
        </div>
    </>
  )
}

export default Form2