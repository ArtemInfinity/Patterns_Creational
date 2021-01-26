function Server(name, ip){
    this.name = name
    this.ip = ip
}

Server.prototype.getUrl = function(){
    return `https://${this.ip}:80`
}

const aws = new Server('aws Russia', '123.23.45.55')

console.log(aws.getUrl())