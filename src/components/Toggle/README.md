**Toggles** are controls that are used to quickly switch between two possible states. The example below shows
an uncontrolled Toggle component. To use the Toggle component as a controlled component, set the toggled property.
Setting the toggled property will allow you to change the value dynamically, whereas setting the defaultToggled
prop will only set the value initially.

### Usage with react
```js
import { Toggle } from '@wfp/ui';
```

```js
<Toggle
  toggled={true}
  labelA="Off"
  labelB="On"
  onChange={onChange}
  onToggle={onToggle}
  className="some-class" 
  id="toggle-1" 
/>
```