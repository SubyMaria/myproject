import axios from "axios"
const KEY="AIzaSyBAXyD1Rm4U-bmIpaUvVdVcxF8pnLOQwzg"

export default axios.create( {
    baseURL:'https://www.googleapis.com/youtubr/v3/',
    params:{
        part:"snippet",
        maxResults=6,
        key:KEY
    }}
    
        )
    

