
async function getPost(){
const response=fetch('https://jsonplaceholder.typicode.com/posts',{
    method:"GET",
});
return response;
}
export default getPost;