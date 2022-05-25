import { Number, Shape, Style, TextInput } from "@makeswift/runtime/controls";
import { ReactRuntime } from "@makeswift/runtime/react";

// Register your components here!

ReactRuntime.registerComponent(
  ({ foo, ...rest }) => <p {...rest}>{foo.bar}</p>,
  {
    type: "hello-world",
    label: "Hello, world!",
    props: {
      className: Style({ properties: Style.All }),
      test: TextInput({ label: "Test", defaultValue: "" }),
      foo: Shape({
        type: {
          text: TextInput({
            label: "Shape Input",
            defaultValue: "Hello Shape",
          }),
          bar: Number({ label: "Shape Number" }),
        },
      }),
    },
  }
);
