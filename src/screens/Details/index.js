import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Box } from "../../components/Spacing";
import { TextRegular, TextSubtitle } from "../../components/Title";
import { useNavigation, useRoute } from "@react-navigation/native";

const Details = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { description } = route?.params;

  useEffect(() => {}, []);

  return (
    <Box pt={20} pr={20} pl={20}>
      <Box>
        <TextRegular color="#F05454">Vila Mariana</TextRegular>
        <TextRegular color="#30475E">Alugue com Lello My Home</TextRegular>
      </Box>

      <Box>
        <Box
          key={Math.random()}
          height="150"
          width="100%"
          mr="10"
          border={0.5}
          borderRadius={10}
          mt="20"
          bg="orange"
        >
          <Image
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 10,
            }}
            resizeMode="cover"
            source={require("../../img/loft-1.jpeg")}
          />
        </Box>
      </Box>

      <Box mt="20">
        <TextRegular color="#F05454">Sobre</TextRegular>
        <Text>{description}</Text>
      </Box>

      {/* Mapa */}
      <Box width="100%" mt="10" borderRadius={10} borderColor="#222831">
        <TextRegular
          color="#F05454"
          onPress={() => {
            navigation.navigate("HomeUser");
          }}
        >
          Items do Imovel
        </TextRegular>
        <TextSubtitle color="#222831">2 banheiros</TextSubtitle>
        <TextSubtitle color="#222831">Varanda gourmet</TextSubtitle>
        <TextSubtitle color="#222831">Cozinha planejada</TextSubtitle>
        <TextSubtitle color="#222831">
          Shopping Metro Santa Cruz a 5 minutos
        </TextSubtitle>
      </Box>

      <Box height="15%" width="100%" mt="10">
        <Image
          style={{
            height: "100%",
            width: "100%",
            borderRadius: 10,
          }}
          resizeMode="cover"
          source={require("../../img/mapa.png")}
        />
      </Box>

      <Box>
        <TouchableOpacity
          style={{
            height: 52,
            width: "100%",
            borderRadius: 10,
            backgroundColor: "#30475E",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
          onPress={() => navigation.navigate("EnvioDocumentos")}
        >
          <TextRegular color="#fff">Alugue de forma convencional</TextRegular>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 52,
            width: "100%",
            borderRadius: 10,
            backgroundColor: "#F05454",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
          onPress={() => {
            navigation.navigate("LelloDetails");
          }}
        >
          <TextRegular color="#fff">Alugue com Lello My Home</TextRegular>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default Details;
