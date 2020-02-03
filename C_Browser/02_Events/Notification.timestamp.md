# Notification.timestamp

The **`timestamp`** read-only property of the [`Notification`](https://developer.mozilla.org/en-US/docs/Web/API/Notification "The Notification interface of the Notifications API is used to configure and display desktop notifications to the user.") interface returns a `[DOMTimeStamp](https://heycam.github.io/webidl/#common-DOMTimeStamp)`, as specified in the `timestamp` option of the [`Notification()`](https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification "The Notification() constructor creates a new Notification object instance, which represents a user notification.") constructor.

The notification's timestamp can represent the time, in milliseconds since 00:00:00 UTC on 1 January 1970, of the event for which the notification was created, or it can be an arbitrary timestamp that you want associated with the notification. For example, a timestamp for an upcoming meeting could be set in the future, whereas a timestamp for a missed message could be set in the past.

### Value

A `[DOMTimeStamp](https://heycam.github.io/webidl/#common-DOMTimeStamp)`.