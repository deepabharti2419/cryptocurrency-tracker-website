import React from 'react'
import axios from "axios";
import { useEffect } from 'react';
import {server} from "../index";
import { useState } from 'react';
import {Container} from "@chakra-ui/react";
import Loader from "./Loader";
import {HStack ,VStack ,Image ,Heading,Text} from "@chakra-ui/react"
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {

    const[exchanges,setExchanges] = useState([]);
    const[loading,setloading] = useState(true);
    const[error,setError] = useState(false);

    useEffect(()=>{
        const fetchExchanges = async()=>{
            try{
            const {data} =await axios.get(`${server}/exchanges?per_page=250`);
            setExchanges(data);
            console.log(data);
            setloading(false);
            }catch(error){
                setError(true);
                setloading(false);
            }
        };
        fetchExchanges();
    },[]);

    if(error) return<ErrorComponent  message={"Error while fetching the exchanges"}/> ;
  return (
  <Container maxW={"container.xl"}>{loading ?   <Loader /> :<>
  <HStack wrap={"wrap"}>
    {exchanges.map((i) => (
       <ExchangeCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url}/>
   ) )}
  </HStack>
  </> }</Container>
  );
};

const ExchangeCard =({name,img,rank,url}) =>(
    <a href={url} target={"blank"}>
        <VStack w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} m={"4"} transition={"all 0.3s"}
        css={{
            "&:hover":{
                transform:"scale(1.1)",
            },
        }}>
            <Image src={img} w={"10"}
            h={"10"}
            objectFit={"contain"}
            alt={"Exchange"} />
            <Heading size={"md"} >{rank}</Heading>

            <Text>{name}</Text>
        </VStack>

    </a>
)
export default Exchanges
