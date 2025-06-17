const loginForm = () => {
    const str = `
    <h3>Login Form</h3>
    <p><button>Create Account</button></p>
    `
    root.innerHtml = str
}

const registerForm = () => {
    const str = `
    <h3>Register Form</h3>
    <p></p>
    <p><button onclick='loginForm()'>Already a member? click here..</button></p>
    `
    root.innerHtml = str
}

