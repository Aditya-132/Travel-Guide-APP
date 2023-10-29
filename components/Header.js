import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

export default function Header({ listingInfo }) {
	const navigation = useNavigation();
	const [like, setLike] = useState(false);
	return (
		<View>
			<View className="relative bg-white shadow-lg">
				<Image
					source={{
						uri:
							listingInfo?.photo?.images?.large?.url ||
							"https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg",
					}}
					className="w-full h-72 object-cover rounded-2xl"
				/>
				<View className="absolute flex-row inset-x-0  top-5 justify-between px-6">
					<TouchableOpacity
						className="w-10 h-10 rounded-md items-center justify-center bg-white"
						onPress={() => navigation.navigate("Discover")}
					>
						<Entypo name="chevron-left" size={24} color="#0682be" />
					</TouchableOpacity>
					<TouchableOpacity
						className="w-10 h-10 rounded-md items-center justify-center shadow-md "
						onPress={() => setLike(!like)}
					>
						<AntDesign
							name="heart"
							size={24}
							color={like ? "#008cc9" : "white"}
						/>
					</TouchableOpacity>
				</View>
				<View className="absolute flex-row inset-x-0  bottom-5 justify-between px-6">
					<View className="flex-row space-x-2 items-center">
						<Text className="text-[20px] font-bold text-gray-100 shadow-md">
							{listingInfo.price}
						</Text>
					</View>
					<View className="px-2 py-1 rounded-md bg-teal-100">
						<Text>{listingInfo?.open_now_text}</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
