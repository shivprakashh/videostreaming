function fet(endpoint,body){
  this.body = body;
  this.endpoint = endpoint
}
fet.prototype.get = async function(){
 const data = await fetch(`https://www.google.com`,{
    method:"GET",
   
})
return data
}
fet.prototype.post = async function(){
    const data = await fetch(`http://www.google.com/${this.endpoint}`,{
       method:"GET",
       body:this.body
   })
   return data
   }
module.exports = fet;
