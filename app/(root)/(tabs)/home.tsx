import { useUser } from "@clerk/clerk-expo";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RideCard from "@/components/RideCard";

const recentRides = [4]; // This appears to be a placeholder array with 4 elements

export default function Page() {
  const { } = useUser();

  return (
    <SafeAreaView className="bg-general-500">
      <FlatList
        data={recentRides?.slice(0, 5)}
        renderItem={({ item }) => <RideCard ride={item} />}
      />
    </SafeAreaView>
  );
}