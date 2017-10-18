import { Color } from "tns-core-modules/color";
import { ContentView } from "tns-core-modules/ui/content-view";
import {
  backgroundColorProperty,
  backgroundInternalProperty,
  Property
} from "tns-core-modules/ui/core/view";

export {
  backgroundColorProperty,
  backgroundInternalProperty
} from "tns-core-modules/ui/core/view";

/**
 * Contains the CardView class, which represents a card view component.
 */
export class CollapseToolbarCommon extends ContentView {
  /**
   * Gets the native [android widget](https://developer.android.com/reference/android/support/v7/widget/CardView.html) that represents the user interface for this component. Valid only when running on Android OS.
   */
  android: any /* android.support.v7.widget.CardView */;

  /**
   * Gets the native [ios widget](UIView) that represents the user interface for this component. Valid only when running on iOS.
   */
  ios: any /* UIView */;
}
