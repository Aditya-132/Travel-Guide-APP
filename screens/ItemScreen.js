import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
	Image,
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import {
	AntDesign,
	FontAwesome,
	FontAwesome5,
	Foundation,
	MaterialIcons,
} from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Header from "../components/Header";
export default function ItemScreen({ route }) {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);
	const listingInfo = route?.params?.param;
	return (
		<SafeAreaView className="flex-1 bg-white relative">
			<ScrollView className="h-full px-4 py-6">
				<Header listingInfo={listingInfo} />
				<View className="mt-6">
					<Text className="text-[#428288] text-[24px] font-bold">
						{listingInfo?.name}
					</Text>
					<View className="flex-row items-center space-x-2 mt-2">
						<Foundation name="marker" size={25} color="#8c9ea6" />

						<Text className="text-[#8c9ea6] text-[12px]">
							{listingInfo?.location_string}
						</Text>
					</View>
				</View>
				<View className="mt-4 flex-row items-center justify-between">
					{listingInfo?.rating && (
						<View className="flex-row items-center space-x-2">
							<View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md ">
								<FontAwesome name="star" size={24} color="#D58574" />
							</View>
							<View>
								<Text className="text-[#515151]">{listingInfo?.rating}</Text>
								<Text className="text-[#515151]">Ratings</Text>
							</View>
						</View>
					)}
					{listingInfo?.price_level && (
						<View className="flex-row items-center space-x-2">
							<View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md ">
								<MaterialIcons name="attach-money" size={24} color="black" />
							</View>
							<View>
								<Text className="text-[#515151]">
									{listingInfo?.price_level}
								</Text>
								<Text className="text-[#515151]">Price level</Text>
							</View>
						</View>
					)}
					{listingInfo?.bearing && (
						<View className="flex-row items-center space-x-2">
							<View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md ">
								<FontAwesome5 name="map-signs" size={24} color="black" />
							</View>
							<View>
								<Text className="text-[#515151]">{listingInfo?.bearing}</Text>
								<Text className="text-[#515151]">Bearing</Text>
							</View>
						</View>
					)}
				</View>
				{listingInfo?.description && (
					<Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97a6af]">
						{listingInfo?.description}
					</Text>
				)}
				{listingInfo?.cuisine && (
					<View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
						{listingInfo?.cuisine.map((cuisine) => (
							<TouchableOpacity
								key={cuisine?.key}
								className="px-2 py-1 rounded-md bg-emerald-100"
							>
								<Text>{cuisine.name}</Text>
							</TouchableOpacity>
						))}
					</View>
				)}
				<View className="space-y-3 mt-6 bg-gray-100 rounded-2xl px-4 py-2">
					{listingInfo?.phone && (
						<View className="flex-row items-center space-x-6">
							<FontAwesome name="phone" size={20} color="#a28284" />
							<Text className="text-md">{listingInfo.phone}</Text>
						</View>
					)}
					{listingInfo?.email && (
						<View className="flex-row items-center space-x-6">
							<FontAwesome name="envelope" size={20} color="#a28284" />
							<Text className="text-md">{listingInfo.email}</Text>
						</View>
					)}
					{listingInfo?.address && (
						<View className="flex-row items-center space-x-6">
							<FontAwesome name="map-pin" size={20} color="#a28284" />
							<Text className="text-md">{listingInfo.address}</Text>
						</View>
					)}
				</View>
				<TouchableOpacity className="my-8 px-4 py-2 rounded-lg bg-blue-500 items-center justify-center shadow-lg cursor-pointer">
					<Text className="text-3xl font-semibold uppercase tracking-wider text-gray-100">
						Book now
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
}
