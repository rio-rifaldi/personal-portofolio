import {Tabs, TabsContent, TabsList, TabsTrigger} from "../../ui/tabs.tsx";
import Porto_UI_UX from "./Porto_UI_UX.tsx";
import Porto_web_dev from "./Porto_web_dev.tsx";

type Props = {};

const PortofolioTabs = (props: Props) => {
	return (
		<Tabs defaultValue="web">
			<TabsList className="bg-transparent transition-all  mx-auto my-6 w-full">
				<TabsTrigger
					value="web"
					className="capitalize data-[state=active]:bg-transparent data-[state=active]:underline data-[state=active]:underline-offset-8 data-[state=active]:decoration-purple-600 data-[state=active]:decoration-[3px]  "
				>
					web development
				</TabsTrigger>
				<TabsTrigger
					value="ui"
					className="uppercase data-[state=active]:bg-transparent data-[state=active]:underline data-[state=active]:underline-offset-8 data-[state=active]:decoration-purple-600 data-[state=active]:decoration-[3px]"
				>
					ui/ux
				</TabsTrigger>
			</TabsList>
			<TabsContent value="web">
				<Porto_UI_UX />
			</TabsContent>
			<TabsContent value="ui">
				<Porto_web_dev />
			</TabsContent>
		</Tabs>
	);
};

export default PortofolioTabs;
