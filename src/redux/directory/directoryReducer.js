const INITAL_STATE={
    selector:[
        {
            title:"hats",
            imageUrl:"https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            id:1,
            linkUrl:'shop/hats'
        },
        {
            title:"shoes",
            imageUrl:"https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
            id:2,
            linkUrl:'shop/shoes'
        },
        {
            title:"mens",
            imageUrl:"https://image.freepik.com/free-photo/handsome-young-man-with-wearing-blue-coat-red-shirt-standing-touching-his-head-looking-directly-camera-with-big-eyes_176532-11165.jpg",
            id:3,
            linkUrl:'shop/mens'
        },
        {
            title:"jacket",
            imageUrl:'https://images.unsplash.com/photo-1578198576866-7e0ba6078128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            id:4,
            size:"large",
            linkUrl:'shop/jacket'
        },
        {
            title:"women",
            imageUrl:"https://images.unsplash.com/photo-1582041148887-67274b989ae3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
            id:5,
            size:'large',
            linkUrl:'shop/women'
        }
       
    ]
};
const DirectoryReducer =(state=INITAL_STATE , action)=>{
switch(action.type){
    default:
        return state
    }
}
export default DirectoryReducer;