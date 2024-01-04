export function init(context) {
  return {
    logContext: function () {
      console.log(context)
    }
  }
}
