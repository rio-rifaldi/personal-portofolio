import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import * as z from "zod";

import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "../../ui/textarea";

const formSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	address: z.string(),
	message: z.string(),
});

function ContactMe() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			address: "",
			email: "",
			message: "",
			name: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-3 my-5"
			>
				<div className="grid sm:grid-cols-2 gap-4">
					{/* name start */}
					<FormField
						control={form.control}
						name="name"
						render={({field}) => (
							<FormItem>
								<FormLabel className="text-white">Name</FormLabel>
								<FormControl>
									<Input
										placeholder="Name"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* name end */}

					{/* email start */}
					<FormField
						control={form.control}
						name="email"
						render={({field}) => (
							<FormItem>
								<FormLabel className="text-white">Email</FormLabel>
								<FormControl>
									<Input
										placeholder="email"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* email end */}
				</div>
				{/* address start */}
				<FormField
					control={form.control}
					name="address"
					render={({field}) => (
						<FormItem>
							<FormLabel className="text-white">Address</FormLabel>
							<FormControl>
								<Input
									placeholder="address"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				{/* address end */}

				{/* message start */}
				<FormField
					control={form.control}
					name="message"
					render={({field}) => (
						<FormItem>
							<FormLabel className="text-white">message</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Type your message here."
									id="message"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				{/* message end */}
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}

export default ContactMe;
