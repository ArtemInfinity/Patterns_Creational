class Server2 {

    constructor(name, ip){
        this.name = name
        this.ip = ip
    }

    getUrl(){
        return `${this.name}: https://${this.ip}:80`
    }
}

const aws2 = new Server2('aws Russia', '123.23.45.55')

console.log(aws.getUrl())