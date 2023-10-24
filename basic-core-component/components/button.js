import { Pressable, Text } from "native-base";
// Functional Component with props
const Button = (props) => {
    return (
      <Pressable backgroundColor={"#dddddd"} p={15} alignItems={"center"} borderRadius={30} onPress={props.onPress}>
        <Text fontSize={16} textTransform={"uppercase"} fontWeight={"bold"}>{props.text}</Text>
      </Pressable>
    );
  };

  export default Button;
  
  
  