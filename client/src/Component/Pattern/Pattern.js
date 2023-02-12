const patternPassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/);
const patternEmail   =  new RegExp(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/);
const Pattern=()=>{
    return(<h6>use pattern RegExp for email ,password</h6>)
}
export { patternEmail,patternPassword};
export default Pattern ;