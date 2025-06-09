import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const schema = z.object({
    username: z.string().min(1).regex(/^[0-9a-zA-Z_-]+$/, "Special symbols are not allowed."),
    email: z.string().email(),
    password: z.string().min(6, "Password contain at least 6 letters."),
    confirmPassword: z.string().min(6, "Confirm Password must contain atleast 6 letters.")
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password must matched.",
    path: ['confirmPassword']
})

function Form4() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(schema)
    })

    const submitForm = (data) => {
        console.log(data)
        reset()
    }
    return (
        <>
            <form onSubmit={handleSubmit(submitForm)}>
                <div>
                    <input type="text" placeholder='Enter username'{...register("username")} />
                    <p>{errors.username?.message}</p>
                </div>

                <div>
                    <input type="email" placeholder='Enter email' {...register("email")} />
                    <p>{errors.email?.message}</p>
                </div>

                <div>
                    <input type="text" placeholder='Enter password' {...register("password")} />
                    <p>{errors.password?.message}</p>
                </div>

                <div>
                    <input type="text" placeholder='confirm password' {...register("confirmPassword")} />
                    <p>{errors.confirmPassword?.message}</p>
                </div>

                <div>
                    <input type="submit" value={`click to submit`} />
                </div>
            </form>
        </>
    )
}

export default Form4