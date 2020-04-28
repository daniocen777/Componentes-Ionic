import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.page.html",
  styleUrls: ["./alert.page.scss"],
})
export class AlertPage implements OnInit {
  titulo: string;

  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  /* Inputs */
  async presentInput() {
    const input = await this.alertController.create({
      header: "Input",
      subHeader: "Ingrese su nombre",
      inputs: [
        {
          name: "txtNombre",
          type: "text",
          placeholder: "Nombre",
        },
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Ok",
          handler: (data) => {
            this.titulo = data.txtNombre;
            console.log("Confirm Ok", data);
          },
        },
      ],
    });
    await input.present();
  }

  /* Alertas */
  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Alert",
      subHeader: "Subtitle",
      message: "This is an alert message.",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Botón CANCELAR");
          },
        },
        {
          text: "OK",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Botón OK");
          },
        },
      ],
    });

    await alert.present();
  }
}
