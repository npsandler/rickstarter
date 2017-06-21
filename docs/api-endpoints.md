API Endpoints
----
___________________
HTML API
---

**ROOT**

**Loads React web app**

``` GET / ```

JSON API
----

**USERS**


```POST /api/users```

```PATCH /api/users```

**SESSION**

```POST /api/session```

```DELETE /api/session```

**PROJECTS**

``` POST /api/projects ```

```GET /api/projects/:projectId```

```PATCH /api/projects/:projectId```

```DELETE /api/projects/:projectId```


**COMMENTS**

```GET /api/projects/:id/comments/:id```

```POST /api/projects/:id/comments```

```PATCH /api/projects/:id/comments/:id```

```DELETE /api/projects/:id/comments/:id```

**REWARDS**

```GET /api/projects/:projectId/rewards```

```POST /api/projects/:projectId/rewards```

```DELETE /api/projects/:projectId/rewards/:rewardId```


**PLEDGES**

```POST /api/rewards/:rewardId/pledges```
