import { Paper, TextField, Box, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import VaraText from "../components/VaraText";
import "./home.css";
import { useState } from "react";

const prod = {
    // maxHeight: '150px', 
    // minHeight: '50px', 
    // maxWidth: '150px', 
    // minWidth: '50px',
    height: '150px',
    width: '150px',
    // aspectRatio:'1/1', 
    // borderRadius: '50%', 
    // backgroundColor: '#db3354',
    margin: '25px',
}

const img = {
    height: '100%',
    width: '100%',
    boxShadow: '10px 10px 20px 0px #1e1e1e55'
}

const container = {
    hidden: { display: 'none', opacity: 1, scale: 0 },
    visible: {
        display: 'block',
        opacity: 1,
        scale: 1,
    }
}
    
const item = {
    hidden: { 
        y: 100, 
        opacity: 0 
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1
    }
}

const searchBox = {
    hidden: { 
        y: 50, 
        opacity: 0 
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1
    }
}

const Home = () => {
    const [showProd, SetShowProd] = useState(false);

    function search(text){
        console.log(text);
        SetShowProd(true);
    }

    function handleKeyDown(e){
        if(e.keyCode==13){
            search(e.target.value);
        }
    }
    return (
        <>
            {!showProd&&(
            <Box sx={{position: 'absolute', height: '100vh', width: '100vw', top: 0, bottom: 0, left: 0, right: 0
            , display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                <VaraText text="Hi There!"/>
            </Box>)}
            <Paper sx={{width: '90vw', height:'90vh', backgroundColor: '#00084755', display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection: 'column'}}>
                <Box sx={{width:'100%', height:'80%', display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                <motion.div variants={container} animate={showProd?"visible":"hidden"} transition={{duration: 0.5}}>
                    <Paper sx={{backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                        <motion.div variants={item} animate={showProd?"visible":"hidden"} transition={{duration:0.5, delay: 0.2}}>
                            <Box sx={prod}>
                                <Avatar sx={img} alt="JBL Cinema SB241" src="https://m.media-amazon.com/images/I/31wSAoUC+tL._AC_SR480,480_.jpg" />
                            </Box>
                        </motion.div>
                        <motion.div variants={item} animate={showProd?"visible":"hidden"} transition={{duration:0.5, delay: 0.3}}>
                            <Box sx={prod}>
                                <Avatar sx={img} alt="JBL Cinema SB241" src="https://m.media-amazon.com/images/I/817WWpaFo1L._SL1500_.jpg" />
                            </Box>
                        </motion.div>
                        <motion.div variants={item} animate={showProd?"visible":"hidden"} transition={{duration:0.5, delay: 0.4}}>
                            <Box sx={prod}>
                                <Avatar sx={img} alt="JBL Cinema SB241" src="https://m.media-amazon.com/images/I/61KEBPVPfzL._SL1000_.jpg" />
                            </Box>
                        </motion.div>
                        <motion.div variants={item} animate={showProd?"visible":"hidden"} transition={{duration:0.5, delay: 0.5}}>
                            <Box sx={prod}>
                                <Avatar sx={img} alt="JBL Cinema SB241" src="https://m.media-amazon.com/images/I/31wSAoUC+tL._AC_SR480,480_.jpg" />
                            </Box>
                        </motion.div>
                    </Paper>
                </motion.div>
                </Box>
                <motion.div style={{width:'100%'}} initial={searchBox.hidden} animate={searchBox.visible} transition={{duration:0.5, delay: 6.5}}>
                    <Box sx={{width:'100%', height:'20%', display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                        <TextField sx={{backgroundColor: 'white', width: '100%', maxWidth: '600px', borderRadius: '50px', outline: 'none'}} onKeyDown={handleKeyDown}/>
                    </Box>
                </motion.div>
            </Paper>
        </>
    );
}

export default Home;