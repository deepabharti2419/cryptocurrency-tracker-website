import React from 'react'
import {Link} from "react-router-dom";
import {HStack ,VStack ,Image ,Heading,Text} from "@chakra-ui/react"

      const CoinCard =({id,name,img,symbol,price ,currencySymbol="inr"}) =>(
    <Link to={`/coin/${id}`}>
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
            <Heading size={"md"} >{symbol}</Heading>

            <Text >{name}</Text>
            <Text >{price? `${currencySymbol}${price}` : "NA"}</Text>
        </VStack>

    </Link>
);

export default CoinCard
