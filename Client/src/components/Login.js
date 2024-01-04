function Login(){
    function handleSubmit(){
        alert(document.getElementsByName("pw")[0].value)
    }
    function handlemover(){
        document.getElementById("lp")["style"]["boxShadow"]="5px 5px 10px black";
    }
    function handlemleave(){
        document.getElementById("lp")["style"]["boxShadow"]="0px 0px 0px black";
    }
    return(
        <div className="login-parent">
            <center>
        <div id="lp" onMouseLeave={handlemleave} onMouseOver={handlemover} className="login-page">
            <p><b><i><u style={{textShadow:"1px 2px 5px yellow, -1px -2px 5px white"}}>Login Page</u></i></b></p>
            username: <input type="text" id="idun" /><br/>
            password: <input type="password" name="pw" /><br/><br/>
            <button onClick={handleSubmit}>Login</button>
        </div>
        </center>
        </div>
    );
}
export default Login