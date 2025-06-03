interface Props {
	css: string;
}

export function InlineStyle({ css }: Props) {
	return (
		<style
			dangerouslySetInnerHTML={{
				__html: css
			}}
		/>
	);
}
