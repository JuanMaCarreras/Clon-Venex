


export const signUp = (req, res) => {

    const { name, email, password } = req.body

    console.log(req.body)

    res.json('Sign Up')
}

export const signIn = (req, res) => {
    res.json('Sign In')

}

