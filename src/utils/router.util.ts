/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import router from "@/router";
export default class RouterUtils {
  public static goTo(routeName: string): void {
    router.push({ name: routeName }).catch((error) => {
      this._ignoreNavDuplicated(error);
    });
  }

  public static goToWithParams(routeName: string, params: any): void {
    router.push({ name: routeName, params: params }).catch((error) => {
      this._ignoreNavDuplicated(error);
    });
  }

  public static goToRouterPath(routeName: string): void {
    router.push(routeName).catch((error) => {
      this._ignoreNavDuplicated(error);
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static _ignoreNavDuplicated(error: any): void {
    if (
      !error &&
      error.name !== "NavigationDuplicated" &&
      !error.message.includes(
        "Avoided redundant navigation to current location"
      )
    ) {
      console.log(error);
    }
  }
}
