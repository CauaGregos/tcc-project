const resUpdatePass = () => {
   
    return (`
    <html>
        <head>
        <title>Esqueceu a senha?</title>
        </head>
    
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>


    <body>
        <div class="box">
            <h1>Senha alterada com sucesso!</h1>
        </div>
    </body>
    
    
    
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            background-image: linear-gradient(to left top,
             #000000,
             #030303,
             #060606,
             #090909,
             #0c0c0c,
             #0e0e0e,
             #0f0f0f,
             #111111,
             #121212,
             #141414,
             #151515,
             #161616);
        }
    
        .box {
            color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.6);
            padding: 15px;
            border-radius: 15px;
            width: 25%;
            top: 45%;
        }
    
        .legends {
            border: 1px solid rgb(0, 0, 0);
            padding: 10px;
            text-align: center;
            background-color: rgb(23, 23, 23);
            border-radius: 8px;
        }
    
        .botao{
            color: rgb(255, 255, 255);
            font-size: 15px;
            display: block;
            margin: 0 auto;
            width: 50%;
            border-radius: 15px;
            background-image: linear-gradient(to left top,
             #000000,
             #030303,
             #060606,
             #090909,
             #0c0c0c,
             #0e0e0e,
             #0f0f0f,
             #111111,
             #121212,
             #141414,
             #151515,
             #161616);    
        }
    
        .inputs{
            font-size: 15px;
            width: 100%;
            color: black;
        }
    
        .icon{
            width: 50%;
            margin-left: 25%;
        }
    </style>
    </html>
    `)
}

module.exports = {resUpdatePass}