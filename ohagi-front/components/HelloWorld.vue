<script setup lang="tsx">
interface Props {
  name: string;
  bigName: string;
}
const props = defineProps<Props>();
</script>

<script lang="tsx">
export default defineComponent({
  render() {
    return (
      <div>
        Hello {this.props.name}! {this.bigName}
      </div>
    );
  },
});
</script>
