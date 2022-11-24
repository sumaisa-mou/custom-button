export default function Iframe(vm) {
    console.log(vm);
    return {
        computed: {
            msg() {
                return vm.msg;
            }
        }
    }
}
