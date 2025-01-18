// cxmsg.js
export class Login {
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static accessor = null;
    static enspoint = "https://04e21b06-61f9-47e2-9a53-214d9b843027-00-1qj5lp13ufuxz.kirk.replit.dev/";

    static login = (mat, pas) => {
        this.enspoint += `?matricula=${mat}&senha=${pas}`;
        fetch(this.enspoint)
            .then(res => res.json())
            .then(res => {
                if (res) {
                    this.logado = true;
                    this.matlogado = mat;
                    this.nomelogado = res.nome;
                    this.accessor = res.accessor;
                    console.log(res);
                } else {
                    console.log("Usuário não cadastrado");
                }
            })
            .catch(error => console.error('Error:', error));
    }
}
export { Login };


// class Cxmsg {
//     titulo = null;
//     texto = null;
//     cor = null;
//     img = null;
//     destino = null;
//     divmsg = null;

//     constructor(config) {
//         this.titulo = config.titulo;
//         this.texto = config.texto;
//         this.cor = config.cor;
//         this.img = config.img;
//         this.destino = config.destino || document.body;
//     }

//     mostrar = () => {
//         this.divmsg = document.createElement("div");
//         const estilo_dicmsg =
//             "display: flex;" +
//             "justify-content: center;" +
//             "align-items: center;" +
//             "flex-direction: column;" +
//             "position: absolute;" +
//             "top: 0px;" +
//             "left: 0px;" +
//             "width: 100%;" +
//             "height: 100vh;" +
//             "background-color: rgba(0, 0, 0, 0.7);";

//         this.divmsg.setAttribute("id", "divmsg");
//         this.divmsg.setAttribute("style", estilo_dicmsg);
//         this.destino.prepend(this.divmsg);

//         const estilo_areaCxmsg =
//             "display: flex;" +
//             "justify-content: center;" +
//             "align-items: center;" +
//             "flex-direction: column;" +
//             "width: 600px;" +
//             "height: 200px;" +
//             "border-radius: 20px 20px 0px 0px;" +
//             "background-color: " + this.cor + ";";

//         const areaCxmsg = document.createElement("div");
//         areaCxmsg.setAttribute("style", estilo_areaCxmsg);
//         this.divmsg.appendChild(areaCxmsg);

//         const estilo_btn_config_Cxmsg =
//             "display: flex;" +
//             "justify-content: center;" +
//             "align-items: center;" +
//             "flex-direction: column;" +
//             "width: 600px;" +
//             "height: 50px;" +
//             "cursor: pointer;"+
//             " border: 0px;"+
//             "background-color: white;"+
//             "border-radius: 0px 0px  20px 20px;" +
//             "background-color: white;"


//         const btnCxmsg = document.createElement("button");
//         btnCxmsg.setAttribute("style", estilo_btn_config_Cxmsg);
//         btnCxmsg.innerHTML = "btn config";
//         btnCxmsg.addEventListener("click", () => this.ocultar());
//         this.divmsg.appendChild(btnCxmsg);

//         const tituloCxmsg = document.createElement("h2");
//         tituloCxmsg.innerText = this.titulo;
//         areaCxmsg.appendChild(tituloCxmsg);

//         const textoCxmsg = document.createElement("p");
//         textoCxmsg.innerText = this.texto;
//         areaCxmsg.appendChild(textoCxmsg);

//         const imgCxmsg = document.createElement("img");
//         imgCxmsg.setAttribute("src", this.img);
//         imgCxmsg.setAttribute("style", "max-width: 10%; height: auto;");
//         areaCxmsg.appendChild(imgCxmsg);
//     }

//     ocultar = () => {
//         if (this.divmsg) {
//             this.divmsg.remove();
//         }
//     }
// }
// cxmsg.js