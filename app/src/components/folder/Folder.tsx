import {View, Image, Text} from "react-native";
import FOLDER from '@asset/images/folder.png';
import {FolderStyle} from "@src/components/folder/Folder.style";

interface Props {
  label: string
}

//TODO: CATEGORY NAME 으로 설정
export const Folder = (props: Props) => {
  const {label = 'JavaScript'} = props;
  return (
    <View style={FolderStyle.FolderContainer}>
      <Image style={FolderStyle.FolderIcon} source={FOLDER} />
      <Text style={FolderStyle.FolderLabel}>{label}</Text>
    </View>
  )
}