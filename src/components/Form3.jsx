import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import "./Form.css"
import { email } from "zod/v4-mini"

const schema = z.object({
    username: z.string().min(1, "Username is required."),
    email: z.string().email("Email is required."),
    age: z.number()
})

function Form3() {
  const form = useForm({
    resolver: zodResolver(schema)
  })

  const { register, handleSubmit, formState: {errors}} = form

  const formSubmission = (data) => {
    console.log(data)
  }

  return (
    <>
        <div className="container">
            <form onSubmit={handleSubmit(formSubmission)}>
                <div className="mb-3">
                    <input type="text" placeholder="Enter username" {...register("username")} />
                    <p>{errors.username?.message}</p>
                </div>

                <div className="mb-3">
                    <input type="text" placeholder="Enter email" {...register("email")}/>
                    <p>{errors.email?.message}</p>
                </div>

                <div className="mb-3">
                    <input type="number" placeholder="Enter age" {...register("age")}/>
                    <p>{errors.age?.message}</p>
                </div>

                <div>
                    <input type="submit" value="click to submit form" />
                </div>
            </form>
        </div>
    </>
  )
}

export default Form3