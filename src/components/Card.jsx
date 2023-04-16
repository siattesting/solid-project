export default function Card(props) {
  return (
    <div
      class="bg-white text-center"
      classList={{ 'rounded-md': props.rounded, 'shadow-md': props.flat }}
    >
      {props.children}
    </div>
  );
}
