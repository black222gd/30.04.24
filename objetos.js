class Calebe {
    constructor (site1) {
        this.site1 = site1;
 
    }

    exibirSite () {
        window.open(this.site1);
    }

}

var novoCalebe = new Calebe ("https://www.twitch.tv/"); 
novoCalebe.exibirSite();