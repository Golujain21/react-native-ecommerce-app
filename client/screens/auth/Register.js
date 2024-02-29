import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Form/InputBox";

const Register = ({ navigation }) => {
  const loginImage =
    "https://i.pinimg.com/564x/2e/4f/d3/2e4fd3fd8f2aff9c26b15c1f1c23b11e.jpg";
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [answer, setAnswer] = useState("");
  const [country, setCountry] = useState("india");
  const handleRegister = () => {
    try {
      // validation
      if (!email || !password || !name || !address || !city || !phone) {
        return alert("Please provide all fields client side");
      }
      const formData = {
        email,
        password,
        name,
        address,
        city,
        phone,
        answer,
        country: "India",
      };
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: loginImage }} style={styles.image} />
      <InputBox
        value={name}
        setValue={setName}
        placeholder={"Enter You Name"}
        autoComplete={"name"}
      />
      <InputBox
        value={email}
        setValue={setEamil}
        placeholder={"Enter You Email"}
        autoComplete={"email"}
      />
      <InputBox
        value={password}
        setValue={setPassword}
        placeholder={"Enter You password"}
        autoComplete={"password"}
      />

      <InputBox
        value={phone}
        setValue={setPhone}
        placeholder={"Enter You Phone"}
        autoComplete={"Phone"}
      />
      <InputBox
        value={address}
        setValue={setAddress}
        placeholder={"Enter You address"}
        autoComplete={"address"}
      />
      <InputBox
        value={answer}
        setValue={setAnswer}
        placeholder={"Enter You answer"}
        autoComplete={"answer"}
      />
      <InputBox
        value={city}
        setValue={setCity}
        placeholder={"Enter You City"}
        autoComplete={"City"}
      />
      <InputBox
        value={country}
        setValue={setCountry}
        placeholder={"Enter You Country"}
        autoComplete={"Country"}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
          <Text style={styles.loginBtnText}>Register</Text>
        </TouchableOpacity>
        <Text>
          Alredy a user please ?{"  "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("login")}
          >
            login !
          </Text>
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    backgroundColor: "#000000",
    width: "80%",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
    marginVertical: 20,
  },
  loginBtnText: {
    color: "#ffffff",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 18,
  },
  link: {
    color: "red",
  },
});
export default Register;
