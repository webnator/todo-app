# CHANGELOG

<!--- next entry here -->

## 1.501.1
2023-08-10

### Fixes

- **nova-3304:** fixed query for report (9f48cf965fe0cef34f779a11e43feaadd7342f55)

## 1.501.0
2023-08-10

### Features

- **nova-3263:** changed confidential text (3a59b70fcbf9537f9495c72ef109cff06357a49a)

## 1.500.2
2023-08-09

### Fixes

- **nova-3276:** Stop sending drop-out emails in parallel in order to avoid too-many-requests errors in email provider (f2072ccc5c40bdca5c347879b3139c64af4a2383)

## 1.500.1
2023-08-04

### Fixes

- **nova-3270:** Set TALENT_SETTINGS_COMPLETED only if full settings are provided & add more ESLint rules (049c884008ca1cf0438f0eda7ae661a77f8a500e)

## 1.500.0
2023-08-01

### Features

- **nova-3256:** Sync with hubble on linkedin set (17c8cc3ca8f7f9a175cbd58c9ae5e4d52684ba61)

## 1.499.0
2023-08-01

### Features

- **nova-3267:** send email on onboarding complete (a2cf4394ceb25718d47703c49707236a47604b2e)

## 1.498.0
2023-08-01

### Features

- **nova-3258:** Add a new "user_validated" field to experiences, educations, and languages (8901d934c68fd775846e8ad567889574f68652a8)

## 1.497.0
2023-07-31

### Features

- **nova-3273:** Divide the video questions in columns to the applicants report (7c3a1176323e32ce8bc689fe420b8ce39ca03fd7)

## 1.496.2
2023-07-26

### Fixes

- **nova-3275:** fix client signup email source (3ed23dd75dd553ea0373af2d461e9106b0866c0a)

## 1.496.1
2023-07-21

### Fixes

- **nova-3280:** Free trial not working with Stripe integration (350f7ebbae744a4bb783045424870003e0ec8da1)

## 1.496.0
2023-07-18

### Features

- **nova-3169:** new way to handle gravity users (b2015502f4e3aebd2e6bfcf538e7619e322794fe)

## 1.495.0
2023-07-11

### Features

- **nova-3201:** Hire product retrieving payment client secret (60ceed012d28f5391994b46e7d46bd0eba0eb036)

## 1.494.0
2023-07-04

### Features

- **nova-3241:** allow admins to purchase products outside stripe (0d2a7bbde171cbbe40545e42f8d6c5bd6a3f98fe)

## 1.493.3
2023-07-03

### Fixes

- **nova-3250:** Properly encode invalid urls with diacritics in "bulk nomination" endpoint (a6f95c6f344802da4fd3db982f78cad259bff62b)

## 1.493.2
2023-06-30

### Fixes

- **nova-3231:** env added in the mockEmail that we use to invite TestGorilla (a7b2a5364190b3b06019650b109b995aba01ccd2)

## 1.493.1
2023-06-29

### Fixes

- **nova-3220:** removed rotation of external assessments (4b808421e3002183decee0f58f0f3fe0dab68ce0)

## 1.493.0
2023-06-28

### Features

- **nova-3145:** Get client available products & fix edge-cases when managing a subscription (dcfb6c011a37d7d58e72ef7babd40428cc1822e1)

## 1.492.0
2023-06-27

### Features

- **nova-3191:** some details changed due to the request new position form in CP (8045fcaed93bfff9c9a3e2395348012660ddbcd5)

## 1.491.0
2023-06-23

### Features

- **nova-3234:** Change Nova downloadable certificate by the new one (350c80840823bbfd17ed2ea372e8e2bbd93ef24e)

## 1.490.0
2023-06-23

### Features

- **nova-3238:** added type filter to me hired product endpoint (4eae1196beb3dafc8b60752d9326609008c18a53)

## 1.489.1
2023-06-23

### Fixes

- **nova-3246:** fix membership reminders (6018f31d8b8eb60fc56e99fa7e27ca310fe63371)

## 1.489.0
2023-06-22

### Features

- **nova-2987:** added endpoint to retrieve all talent milestones (210ae270c2df11663874202355ba3bb4b79f7f51)

## 1.488.1
2023-06-21

### Fixes

- **nova-3242:** fix report for event participants (e03db021f61e156de3541cd6e40e5b88276a70c1)

## 1.488.0
2023-06-20

### Features

- **nova-3236:** Create new hired features to restrict benchmark access and TA sessions (e31a2ab0d4b3931ec5cc7653eab1a22723935774)

## 1.487.0
2023-06-14

### Features

- **nova-3195:** Close open positions, events, pools & campaings when... (29f42cdd2d5a20a976465383c0761720c5170755)

## 1.486.0
2023-06-13

### Features

- **nova-3082:** Manage jobs hired feature (6e3c0d247d56ece1e7f8efd6277a486968e0a72c)

## 1.485.0
2023-06-08

### Features

- **nova-3223:** Handle 2 subscription types for NOVA_MEMBERSHIP (cae34f45711a509b241c63fc3d48ef961f3d78ff)

## 1.484.0
2023-06-07

### Features

- **nova-3225:** added member checkout endpoint (80c0cb0ba67f98f20cca479ffaa4c49130a93ce2)

## 1.483.0
2023-06-05

### Features

- **nova-3192:** candidates funnel and support for new client actions at positions management (b77836252f599a25f5851341b1fe2c192e0228e9)

## 1.482.0
2023-06-05

### Features

- **nova-3180:** Upgrading and downgrading a client subscription (70b6a7c9e199c2f80c44dbbe062e0ab542cdf22a)

## 1.481.0
2023-06-02

### Features

- **nova-3198:** added endpoint to deactivate the membership (3302543dc26fdfc75e7c60a39c717ff041791f3f)

## 1.480.0
2023-06-01

### Features

- **nova-3199:** isExpired is calculated using the resetDays (9f79e3a9ee124906133aa712e31f41b96e5e4f73)

## 1.479.0
2023-05-31

### Features

- **nova-3190:** allow free trial for products (87f835597fbf080eb7471a2eec1acbc69c5e155d)

## 1.478.0
2023-05-30

### Features

- **nova-3170:** minor fixes to membership (919d1dd71b348e00ebf2cd65eae175b8dda24a08)

## 1.477.0
2023-05-29

### Features

- **nova-3184:** setting is_unemployed with the lack of main experience instead of the table field (334c0f6e17ae3d6c8dfff704b517198edd78acea)

## 1.476.0
2023-05-29

### Features

- **nova-3053:** fix in desiredHelp (ddda68465df0a5f4050d5f4d0aba148a68018b11)

## 1.475.1
2023-05-29

### Fixes

- **nova-3206:** added orderBy in getEventParticipantReport query (b48488efb25af3c3816472261d4184c5fa77589d)

## 1.475.0
2023-05-26

### Features

- **nova-3194:** added billing address to clients (f7aa338888f972c09fbeb968dab2e722a9b9b372)

## 1.474.2
2023-05-26

### Fixes

- **nova-3170:** fix application accepted template (b0419697bcc45747a731d4fe1cb20f7cdc1cab8d)

## 1.474.1
2023-05-26

### Fixes

- **nova-3207:** fixed error at trying to track talent settings update when they have to be created (31565ea3862b8f3799bc6cca0b346f58771425d4)

## 1.474.0
2023-05-26

### Features

- **nova-3172:** Download certificate assets (5fce8981436784ef8c9d90166ae795bd58a9e2ef)

## 1.473.0
2023-05-25

### Features

- **nova-3170:** Membership reminders setup (b2af68adb3f476a09f37f5c5f48a0f15d7e4c091)

## 1.472.1
2023-05-23

### Fixes

- **nova-3050:** preventing talent settings restore from failing when no matching rows have been found (d31c7f798e21bf38614858d8b974eef4b7835f59)

## 1.472.0
2023-05-22

### Features

- **nova-3134:** added get certificate endpoint (000b4a74f4fb9f3da46d530c8bf170ab1504b720)

## 1.471.0
2023-05-19

### Features

- **nova-3050:** Add new fields to talent settings (2a63bd14569ca79501d89decab664d36146d33ad)

## 1.470.0
2023-05-18

### Features

- **nova-3166:** add member since attribute (1ac4625fa281454d8764cf03133ad9dba12b00fd)

## 1.469.0
2023-05-18

### Features

- **nova-3052:** Fix profile headline (9c152981025295bf22dc9bb2cc49d08de362e433)

## 1.468.0
2023-05-17

### Features

- **nova-3133:** added public_id and membership payment (287000329cd2a3ec658a77bb54258279d8792ce2)

## 1.467.0
2023-05-16

### Features

- **nova-3155:** Set a default admin for new clients that signup by themselves (52368ef25c207ae4c254c5c89985739f14dd28a5)

## 1.466.0
2023-05-12

### Features

- **nova-3114:** added client security to taxonomies (15d3809d50d55c08adece09a73073e5d4ef42253)

## 1.465.0
2023-05-11

### Features

- **nova-3161:** Avoid duplicades on participants report (2b1ecec3b01e5a8fd6adb5e71687ff13c712612c)

## 1.464.2
2023-05-11

### Fixes

- **nova-3188:** Business & Social Sciences changed to Humanities & Social Sciences (d7ad93794ab7d8e9faf1a87ac6c9213351f8041d)

## 1.464.1
2023-05-11

### Fixes

- **nova-3179:** Fix how we are setting the session expiration time (5db3bdd6824272b8431fca778558772ce6cf897a)

## 1.464.0
2023-05-10

### Features

- **nova-3080:** Decommission old client packages structure (2ade25d14d6f1e5c1c034c3d2bc387b6f0eb8932)

## 1.463.0
2023-05-09

### Features

- **nova-3079:** Allow clients to buy products and manage their hired features (client packages migration) (912a3b615ffcae6ca4756d2fe1c12913ffa7e11f)

## 1.462.0
2023-05-08

### Features

- **nova-3081:** Send email when a new client signs up (97c9496721d8a2225b135c713cf0f4bf44f0abce)

## 1.461.0
2023-05-04

### Features

- **nova-3126:** added has membership based on process config (caf469715d786fc5289f16fe0becd4eb356e87a5)

## 1.460.1
2023-05-04

### Fixes

- **nova-3177:** changes in the logic to include the signupFields always (c9879367cb84d5c4a2eeaaeb538a31dc878c405c)

## 1.460.0
2023-05-04

### Features

- **nova-3141:** enabled 111 itally student process for 2023 (7d6261266d9abb81d4498180ef6bb40374471782)

## 1.459.0
2023-04-28

### Features

- **nova-3148:** delete logo and missing fields (56616631ffe2cdd8ad8c08c7af9b745533060782)

## 1.458.0
2023-04-28

### Features

- **nova-3156:** remove hivebrite stuff (b68e2f44ecd4b97d578d782702dab31d96a6a404)

## 1.457.6
2023-04-27

### Fixes

- **nova-3109:** Gravity card and nova profile have different headlines (351e5e3f752552ec0fbe026d701e5f8fe72bc4bf)

## 1.457.5
2023-04-27

### Fixes

- **nova-xxxx:** Test onstop ci (1a2b544755db8b4d8eeb5a9ad3e35784a5856661)

## 1.457.4
2023-04-27

### Fixes

- **nova-3152:** fixed controller that wasn't passing filter params to the use case to retrieve filtered positions (fc4f00d6b1b4b6f1903dfd23483dee5abffe6594)

## 1.457.3
2023-04-26

### Fixes

- **nova-3011:** return images signed (859e8831b43002e7a3e8c40cec3399c9263f8d09)

## 1.457.2
2023-04-26

### Fixes

- **nova-3111:** added superadmin role to legacy admin output moidel (ede6eedb6d7cac7fad9520be63f89762e0e58761)

## 1.457.1
2023-04-26

### Fixes

- **nova-3154:** client platform login (23b6b8a4b17d63d9c8996e09cbc7bc96eed48487)

## 1.457.0
2023-04-25

### Features

- **nova-3075:** Public endpoint to create a new client (4651d1cfc73969cd6672eb4210591ea92405954c)

## 1.456.0
2023-04-25

### Features

- **nova-3011:** Admin endpoints for enrollments (4d3e6f684454414da7fcf9dffdfb0034f8a74217)

## 1.455.0
2023-04-25

### Features

- **nova-3076:** handle client logo in our api (d7ec81b96b831ebe1ba79f217836d15f35f84402)

## 1.454.0
2023-04-24

### Features

- **nova-3090:** filling out closingDate when a position is closed or finished (29ee75a3e68854ba7fa4cdcca3c2e67b7d7902b8)

## 1.453.1
2023-04-24

### Fixes

- **nova-3019:** fixed event participant update service response (92b448e604f1b1dbbe7d4aa752a7349d017a7b56)

## 1.453.0
2023-04-21

### Features

- **nova-3024:** create endpoint to copy candidate between positions (b64c163c155250e1a96b9155332da814296f2977)

## 1.452.0
2023-04-21

### Features

- **nova-3028:** Add extra information to the CSV of events participants (063f64e873951ebfe74d7a2d534d70a05526f420)

## 1.451.0
2023-04-20

### Features

- **nova-3071:** added new fields to client (c0db285e59c9cd75df2155dc2a31dcf98857ec2f)

## 1.450.1
2023-04-20

### Fixes

- **nova-3057:** added tests or custom communication feedback at candidate management (bee96afe08371500b1d5438be5c3e3c50bf1a385)

## 1.450.0
2023-04-20

### Features

- **nova-3016:** send different confirmation emails if events require approval or not (34fbd65f3661c43b9ca9e50516d7bf8fe5eb1d6e)

## 1.449.0
2023-04-20

### Features

- **nova-3010:** Fix the authentication in gravity user (b4ccb1c9cc6acb221d95be21cccbfcfce04ba5bf)

## 1.448.0
2023-04-20

### Features

- **nova-2986:** Manage new onboarding process milestones (65e52bda88f9897f52b02a73d1a6f3227ae0310e)

## 1.447.0
2023-04-19

### Features

- **nova-3018:** handle event participant status (420f54db23691380672d9700c598b8ff38ea94ee)

## 1.446.0
2023-04-18

### Features

- **nova-3025:** added filter to only retrieve open positions for a client (e7f8a07266b68b2485b3d4ca1ff95fa6b56095f4)

## 1.445.4
2023-04-18

### Fixes

- **nova-3123:** For admins always return the full client summary, without checking its confidentiality (678418adc1c58d7cb2d2664ce0c5f4cd16311c7d)

## 1.445.3
2023-04-17

### Fixes

- **nova-xxxx:** Deploy to k8s pre (31956479dbbff6bf1cbd9573cb2a5ac4f2f6ef4b)

## 1.445.2
2023-04-17

### Fixes

- **nova-3054:** Fix workload report (d57b05f81044d11e1e10a900ef0aa7054c301030)

## 1.445.1
2023-04-17

### Fixes

- **nova-3015:** fixed approval requirements null format (cc690c3d30db04eeac6236da411d0589c5b361d3)

## 1.445.0
2023-04-14

### Features

- **nova-3015:** added approval required and requirements fields to event (26a6a24356f430e6c63901e38c0080ceec139188)

## 1.444.1
2023-04-13

### Fixes

- **nova-3097:** get the novaApplication if there is not a talentId when a candidate applies to a position (90aee2630041cdbb847062b51129cd0cb80c75fa)

## 1.444.0
2023-04-13

### Features

- **aws-migration:** Ephemeral environments for nova-back (213498e754f2a4a01756d3e77ead0de2292fbf69)

## 1.443.0
2023-04-12

### Features

- **nova-2571:** slim the response for candidates and positions (00b73b3340acb07a88fcd189769ddf23a667bcc7)

## 1.442.1
2023-04-10

### Fixes

- **nova-3098:** handle public image urls correctly (1b45723edcb765d16650ddf53b0a6d75b1a2f746)

## 1.442.0
2023-04-10

### Features

- **nova-2965:** remote caching of tests with Turborepo and othe changes to reduce the time spent running (76314bef961c52144cc0aa149eff836f1faea05d)

## 1.441.0
2023-04-10

### Features

- **nova-3008:** added admin proxy for gravity (83998b65d1038cfef82f22959020a9936e0bac8c)

## 1.440.0
2023-04-05

### Features

- **nova-3014:** handle multiple logins in same cookie (49b2b07dcd931494e6e43cbfd4f5413ec7ac81e3)

## 1.439.0
2023-04-05

### Features

- **nova-2994:** added endpoint to delete session materials (4976e852d92312960fdc7a5f41e03d6fc8ed1dca)

## 1.438.0
2023-04-03

### Features

- **nova-3020:** Created endpoints to allow admins to delete messages (ee3e9a69294050da70c095de9b78f7c57e1cb2e8)

## 1.437.0
2023-03-28

### Features

- **nova-2980:** In-progress educations have estimated graduation date (315c5b72b24b0c0ebc5b6650ef7a6e7d30c8deb4)

## 1.436.0
2023-03-28

### Features

- **nova-2901:** Added register in an event endpoint (4a1f70352596f8a92989abb2beacdb8e552367b5)

## 1.435.0
2023-03-28

### Features

- **nova-2982:** disabled hivebrite hb sso (317f13c7db6f40a3c76b794284d2eb4be38c417b)

## 1.434.0
2023-03-22

### Features

- **nova-2960:** include answers from signup fields in the participants report (cbf8a2ece621b045b09e5a492c30d3a4acce8791)

## 1.433.0
2023-03-22

### Features

- **nova-2975:** Upgrade to AWS-SDK v3 (01b08d78cb2945c7350d165424c1169508c589b8)

## 1.432.0
2023-03-21

### Features

- **nova-2971:** send product name and stripeid to track on mixpanel (7d7e4ec1bec496de469824616aff6df9318d985a)

## 1.431.0
2023-03-21

### Features

- **nova-2812:** add endpoint me to retrieve course session teachers (82c5efc91d0bf7474061eb740d725e4eaf9a1d88)

## 1.430.0
2023-03-17

### Features

- **nova-2899:** Event signup fields management (dadc86e53392f3fb041b8171c69e910244e2b7da)

## 1.429.1
2023-03-17

### Fixes

- **nova-2952:** Fix order while getting segmented entities (6427f2d771a620503ad8ea4636fcfdaf12b54a03)

## 1.429.0
2023-03-15

### Features

- **nova-2952:** added order by segmentation score (f83309188d9dada75a995221f3848cbf8ef7d489)

## 1.428.0
2023-03-15

### Features

- **nova-2817:** added pagination to sessions (062689707c3be3cc5287b54b0615551cee309e56)

## 1.427.1
2023-03-13

### Fixes

- **nova-2820:** count fellows method fixed to work as expected (69e4160d751bbdb82043495b4a48bd1b7ed06a8b)

## 1.427.0
2023-03-10

### Features

- **nova-2784:** add timezone to sessions (f1632949a8e8180581c417703e90aae6a43a8cd3)

## 1.426.0
2023-03-10

### Features

- **nova-2937:** Endpoint to save segmentation scores (d3b3cc28249785d72c0694cb0e8c35eebae4979d)

## 1.425.0
2023-03-09

### Features

- **nova-2940:** added entity sync proxy (bc39f20efa13db809c3c963d41b10a73ab5de995)

## 1.424.0
2023-03-09

### Features

- **nova-2945:** Stop providing download links to S3 files in our output payloads (0490d0512dafd841ea474499d3654139bbad076e)

## 1.423.1
2023-03-07

### Fixes

- **nova-2972:** Change deadline of Nebula process (be32060adcef0814bd0428785d76a93eeb897e11)

## 1.423.0
2023-03-07

### Features

- **nova-2920:** New automatic message for members in TA space (875b99060fc5599bd1c4ba0249672354733634b3)

## 1.422.0
2023-03-03

### Features

- **nova-2922:** sort application assesments before talent assesments (e1a247be9a39d90ee702d601e290a25ee9a8ba52)

## 1.421.0
2023-03-02

### Features

- **nova-2935:** add Hemfrid processes config (6a9e1549c579f07e807eb91cf90b7aa11b01d433)

## 1.420.1
2023-03-01

### Fixes

- **nova-2949:** Scores are not recalculating when entering experiences/educations (563760b9ed866edb56b83adc7cc863c4d6cf0d2c)

## 1.420.0
2023-03-01

### Features

- **nova-2925:** Create a client package when setting a new one (fbc6c3bd8a3061c810b56d192f2e4e175b820583)

## 1.419.2
2023-03-01

### Fixes

- **nova-2946:** start sending product description to stripe (af1ddb51239be97204b1275a2a7f02bf5d5e5c2f)

## 1.419.1
2023-02-28

### Fixes

- **nova-2957:** parse string to check for deadline (7f4f0f76281a92cf91f10b77c271730107ea77bf)

## 1.419.0
2023-02-28

### Features

- **nova-2906:** new "segmentation_params" endpoints (c544eacb7e01c0e36a543c2730073b9df1910d12)

## 1.418.0
2023-02-27

### Features

- **nova-2905:** added role types endpoint (7e45708e8a770590146172092ae1e5af135d7709)

## 1.417.1
2023-02-24

### Fixes

- **nova-2873:** Use Entity abstract class as root of our domain entities (12a957f2317528ec3e4b1df76d3225c7b8b561c8)

## 1.417.0
2023-02-22

### Features

- **nova-2898:** Endpoints to manage teachers of a session (6d05b03851bb90966e2e2f50860a82c57a05dd04)

## 1.416.0
2023-02-21

### Features

- **nova-2894:** uploadFile with extension (795ead9abb5e09d42adc8afd8d07061315b2b181)

## 1.415.2
2023-02-21

### Fixes

- **nova-2877:** Check if talent's nationality or city exists (c2ae5a3384d369ab04eb2eceac4b7654b8e4e65b)

## 1.415.1
2023-02-21

### Fixes

- **nova-2877:** Some entities are not being converted to their output model counterpart (f30fdd58cb553b8acd76a9c035f26a73f1da2185)

## 1.415.0
2023-02-20

### Features

- **nova-2904:** create endpoint to retrieve Tags (1ba99b162749eea5cbbf08b97a1d1d83d7f2cfa6)

## 1.414.0
2023-02-17

### Features

- **nova-2779:** added program to course endpoint (91c544442524018014a26d0280c39f9adae8ab96)

## 1.413.0
2023-02-17

### Features

- **nova-2780:** Added new function for logged members (456b0e661e3c3ed1a278e32defba13773fe7bf61)

## 1.412.0
2023-02-17

### Features

- **nova-2830:** Move dbAdapter code to novalib-db-adapter (e1d71e914c02f4ceca46e09693dbc3fd7a9f843d)

## 1.411.0
2023-02-16

### Features

- **nova-2871:** Send confirmation when someone applies to a Job (3bacc0b6a67e5ca1850de78e5bae675c9f1a1bec)

## 1.410.1
2023-02-16

### Fixes

- **nova-2924:** allow non novas to be expelled (b959929e1ee2db06ac039a4cc8c13793d5058df8)

## 1.410.0
2023-02-16

### Features

- **nova-2888:** Modify fields for N111 report (738ab00dfa7d0840684461c03494474a0aaf5a28)

## 1.409.0
2023-02-16

### Features

- **nova-2887:** Passing an Applicant to Candidate is not filling the "presentation_date" field in our DB (27a8854952fa8a53a064057fa22d1797b4f1dbc3)

## 1.408.0
2023-02-15

### Features

- **nova-2918:** change N111 email (92b651b54f816a279e3b1a92c9dc093a154c56f6)

## 1.407.0
2023-02-15

### Features

- **nova-2916:** Update verticals in Sweden (4a33e09a88b1573fbad55646c15e1c693e3e769c)

## 1.406.1
2023-02-14

### Fixes

- **nova-2772:** TypeId will be undefined when update course (ba62d0823bc71f4fb915b119b668a99803b178db)

## 1.406.0
2023-02-14

### Features

- **nova-2773:** make discount MoneyAmount for Nebula Courses implementation (a9ded81382b2f581af1592a0a15674bd3aa37c96)

## 1.405.1
2023-02-10

### Fixes

- **nova-2895:** Sort for events fixed (ab857cf3cb3bf7f98513baa0425a719d0a9f0ad8)

## 1.405.0
2023-02-10

### Features

- **nova-2755:** Endpoint to duplicate a course (0078e3a12c9e57cd9db528fb56b37ff58a6d46ce)

## 1.404.0
2023-02-10

### Features

- **nova-2764:** Endpoints to manage teachers of a course (d7dae08a56641bbe0e3cf794927e7437617c2549)

## 1.403.0
2023-02-10

### Features

- **nova-2800:** admins can attach a referrer to a position candidate (28ba4367842d43fe6fd770c204cdf74f0b59691f)

## 1.402.0
2023-02-09

### Features

- **nova-2881:** added referral templates for Nebula (48158101f6c6422ad05b5bacc7cd20f4df6246ab)

## 1.401.0
2023-02-09

### Features

- **nova-2836:** Track gravity preferences changes (afa22f35608055269e7551c1e8f9024b72b0c1ec)

## 1.400.0
2023-02-08

### Features

- **nova-2669:** moved to node 18 (aa4fce8c8dd0d95d5e0ce77cabd477e530c8d77f)

## 1.399.0
2023-02-08

### Features

- **nova-2857:** tracking talent experience and education creation (07071b831d6011c48ae3a9fa41410a893686223e)

## 1.398.0
2023-02-08

### Features

- **nova-2861:** enabled 111 sweded students process (86c66a1a85f8e7e589c972dbd2f9d49e3fdbb67f)

## 1.397.0
2023-02-07

### Features

- **nova-2835:** Track Job application events in Mixpanel (ac1961f304f5efbea93920a273c6f55f8b0ac475)

## 1.396.0
2023-02-06

### Features

- **nova-2760:** Endpoints to manage fellows of a course (ec34066635a6adabf670af611b8b30c530313ff4)

## 1.395.1
2023-02-02

### Fixes

- **nova-2811:** Conversion of statuses to statuses fixed (a0752d40d43ed062a7e851d463b07f156b37a01c)

## 1.395.0
2023-02-02

### Features

- **nova-2506:** entity class with a reusable and safer update method (0db8d30de28f2e1b5ffbf3efa3c8f5368e75890e)

## 1.394.0
2023-02-02

### Features

- **nova-2834:** Send custom communications of candidates also to PM in BCC (5df690f8a96ec0b11add900d8e3fc21d08b29b57)

## 1.393.2
2023-02-01

### Fixes

- **nova-2823:** allow nulls in milestones (e610b09bda8579bf744f340f1a2df6119716b448)

## 1.393.1
2023-02-01

### Fixes

- **nova-2811:** fixed get sort for undefined params (054659a60dab0d095ee672c7f48c1ccb97530d04)

## 1.393.0
2023-02-01

### Features

- **nova-2811:** Courses endpoints for the logged member (a9e00882d6f0da69f21735fa7942cd25e4889627)

## 1.392.0
2023-01-31

### Features

- **nova-2852:** idealProfileSample is nullable (e61c7e1bdf027d859514bd37c4ec2c66ea654f5e)

## 1.391.5
2023-01-31

### Fixes

- **nova-2869:** event tickets can be editable (e21f8dda990a9f8644b114a89776c6dfdea99de3)

## 1.391.4
2023-01-31

### Fixes

- **nova-2860:** Validation occurs before authentication. Reorder Express middlewares (bc9dcebb67d951dbb7e3ccde79311a7e72836791)

## 1.391.3
2023-01-30

### Fixes

- **nova-2809:** fixed Nebula BFP steps (93e91e9174f22dbf2a76e373ce0803fc60ff7d8b)

## 1.391.2
2023-01-30

### Fixes

- **nova-2864:** fix position restore (981a6a9c5bff64bc25d15e9410dfbe1a4b9638eb)

## 1.391.1
2023-01-30

### Fixes

- **nova-2862:** Error in email from events (21d2f2bbfcb492c9fa52945e34734b208f21b20d)

## 1.391.0
2023-01-27

### Features

- **nova-2741:** Endpoints for courses' sessions CRUD (fcaac448cf8dc414b5d9ff5e49ca929b51176b08)

## 1.390.0
2023-01-26

### Features

- **nova-2809:** added BYG and Nebula Bright Future Program processes (d3de0ab11c77f796a00e9c5c8a086927db443cde)

## 1.389.0
2023-01-25

### Features

- **nova-2731:** Create "course" entities and CRUD for courses (fbc1347661166a26bad67e7ccfad4418f6447ba9)

## 1.388.0
2023-01-25

### Features

- **nova-2735:** add discounts to product (468833b1e72cf192f958b00772ee39828af60c93)

## 1.387.0
2023-01-25

### Features

- **nova-2805:** Create reports for Candidate Management (6bb7fc56c3e50dacec82b5c9272d920c736b107d)

## 1.386.0
2023-01-24

### Features

- **nova-2713:** talent tags including integration with Intercom (6c507a6a98e63fd9fc2f1c76483fed72f734f901)

## 1.385.0
2023-01-23

### Features

- **nova-2742:** Create course related taxonomies (3cc03d0d55f785f0bf5c3940b5965c0f5bf5aee8)

## 1.384.0
2023-01-23

### Features

- **nova-2292:** Session report includes the sessions of all TA (0ce423eea474e506ceaa155e26bb81f04833905b)

## 1.383.0
2023-01-20

### Features

- **nova-2808:** make TestGorilla IQ test by ProcessType (e467c87189cc6657cf71496834cd16ba9f18bcd0)

## 1.382.0
2023-01-20

### Features

- **nova-2792:** feedback added to update candidate endpoint (b533552ed08e05c33654cae8b4d23d2b8f897e62)

## 1.381.0
2023-01-20

### Features

- **nova-2804:** Members inside the Software Vertical can also purchase PTA (ea5569241604e9f544601cfe7bf565df5acd610f)

## 1.380.1
2023-01-19

### Fixes

- **nova-2704:** fixed promise condition that disabled sync (578e6107dbd826b36dd8d2f276b499796a8ff3f2)

## 1.380.0
2023-01-19

### Features

- **nova-2718:** added proxy to sync talent on repo change (5705dfe7f64b6eeb7ac388374cc92210dcbc9e77)

## 1.379.1
2023-01-13

### Fixes

- **nova-2797:** Old CVs are not accessible from CABO (9b895aac999f5c2476db967a0ab4961fa8d83300)

## 1.379.0
2023-01-12

### Features

- **nova-2512:** Review how to add version information to deployments (d116c3523dd8adbb371f4ba13e62099e447a8020)

## 1.378.0
2023-01-11

### Features

- **nova-2588:** Review and mitigate impact of 504 errors from TG (a00bac35cac809dde51574c205c96a80b21ab5a3)

## 1.377.2
2023-01-11

### Fixes

- **nova-2798:** Improve applicant report performance by not joining some... (f0f0b828c5c899fa35f4dd831a98a552445075cb)

## 1.377.1
2023-01-10

### Fixes

- **nova-2589:** Downgraded the error severity for uploading files validation failures (ba00a8b799076b19f6715d5069dfa3ff1a3344a2)

## 1.377.0
2023-01-09

### Features

- **nova-2720:** Create 'teacher' entity and CRUD endpoints (8f619bb037f113ce4860be14a5efa0cb14e5b2c4)

## 1.376.1
2023-01-05

### Fixes

- **nova-2743:** send email for free events (408268c085964b84f2e5e28bd9ef692893f277b9)

## 1.376.0
2023-01-04

### Features

- **nova-2719:** Change 111 name of 3 verticals (634371ac36cb8e0aa91ba712f7a2dbdb7929c9a9)

## 1.375.0
2023-01-04

### Features

- **nova-2655:** added salary currency to anonymized contact (3d60de7d5f6ef23b021d5d7c4a6992bd5083e71a)

## 1.374.0
2022-12-30

### Features

- **nova-2609:** Store candidate rejection feedback on discard or withdraw (cd76a2ed6b957abb611cea1ae077a63e4a567e4d)

## 1.373.0
2022-12-29

### Features

- **nova-2564:** Handle candidate milestones (8005fb4f27070dc947d60367a0d794819438f169)

## 1.372.0
2022-12-29

### Features

- **nova-2688:** endpoint to track talent metrics (caa84840667a09d3a367db6fab3723ddc8d8ae0d)

## 1.371.0
2022-12-29

### Features

- **nova-2685:** Use cvFile and not cv in candidates form and view (9aea62952eb7b9805d54ae478b38c24bdfc74989)

## 1.370.0
2022-12-28

### Features

- **nova-2653:** contact anonymous profiles (e41a9f6a3a3d7a9f21d069ffb8d53b1a8cbcfbe4)

## 1.369.1
2022-12-28

### Fixes

- **nova-2693:** Make 'formData' payloads available as 'body' with the right type (f4d780c5f4977e471db6b92b27b3618c63425d7b)

## 1.369.0
2022-12-27

### Features

- **nova-2680:** Fixing empty linkedinUrl in Nominee report in Radar (f4cfb5ac2ccdfc634168354787cf921c8d0acabc)

## 1.368.0
2022-12-27

### Features

- **nova-2646:** Manage files for candidates from CABO (3c8586766426551195b07958d42c4fe18bbe5cff)

## 1.367.0
2022-12-27

### Features

- **nova-2652:** retrieve public anonymized profiles (f07eb36c1ab5fc868367ed20b690d60b28777b30)

## 1.366.0
2022-12-20

### Features

- **nova-2513:** Added new error message (eaf261b3b290f7ea25a42e2a3284c67998b340b4)

## 1.365.0
2022-12-20

### Features

- **nova-2651:** create anonymized cv on candidate creation (2591fb0017ff65e3a9f2e47cc6a25c9b1c5a3083)

## 1.364.1
2022-12-19

### Fixes

- **nova-2691:** Fix default values for job positions creation (062991f16e87ece4f805fc45810447ad5a7a48ae)

## 1.364.0
2022-12-19

### Features

- **nova-2650:** Create the applications/id/anonymous CRU (00c93c78f87916c84200a5dfcb168685cc86345e)

## 1.363.1
2022-12-16

### Fixes

- **nova-2673:** Allow job position properties to be defined as null (6511a1752df0e5b8823c37e27808e63e85896e4d)

## 1.363.0
2022-12-16

### Features

- **nova-2647:** added company type taxonomy (0ef2371cc8096537a27fe270d94334a8e2e65009)

## 1.362.0
2022-12-15

### Features

- **nova-2615:** can filter candidates by status (ed08048ed0cd454e7fb63331b63e3604ff6162a2)

## 1.361.0
2022-12-15

### Features

- **nova-2581:** handle new fields for candidates (ee86fb8b37afb3b1d79948e4e60a5f69a1913ba9)

## 1.360.2
2022-12-15

### Fixes

- **nova-2558:** managed applicant error only for clients (199fa86df91b333bf73fd2e718d8c6c2d526454c)

## 1.360.1
2022-12-15

### Fixes

- **nova-2631:** Prevent lots of requests being made to get email templates (00842d77be8a226da6d4bd839ce4e5c30d6f0c3b)

## 1.360.0
2022-12-14

### Features

- **nova-2649:** Create repository to retrieve enums (26a18e10d09a221c6f03ed0644dfc7126b25bd49)

## 1.359.0
2022-12-14

### Features

- **nova-2580:** Allow to send custom communications when patching candidates (b2e01a80a81456979df31b8761edfd720729176e)

## 1.358.0
2022-12-14

### Features

- **nova-2558:** Manage candidate new statuses (4841a5a87cb491d1c336dbc88059eca24739f873)

## 1.357.0
2022-12-12

### Features

- **nova-2521:** allow for client creation without package (5d03c1e60e5c930305fab341916d883e574a3680)

## 1.356.0
2022-12-12

### Features

- **nova-2019:** Add logs (c4981a8751e907199e1f87f783e4114a7a115185)

## 1.355.0
2022-12-09

### Features

- **nova-2553:** added support for internal candidate notes (7a1e666dd1320cdd9269373f37400555d66b979b)

## 1.354.0
2022-12-09

### Features

- **nova-2610:** added new property: salaryConfidentiality (b500ff172919ec2a23a9c090937d47faa59745c3)

## 1.353.0
2022-12-05

### Features

- **nova-2511:** Event registration process in DA (c362449b777af629a09416500dbda8ec7689bc3a)

## 1.352.0
2022-12-02

### Features

- **nova-2445:** added the possibility to receive a zero price for events (1b631fae13d51a50816b11d1a7bb05df6de595c4)

## 1.351.0
2022-12-01

### Features

- **nova-2604:** When a user buys a product, check the max amount of available products (d82aa3f6514a3144062b606357a0aa2197391b03)

## 1.350.0
2022-12-01

### Features

- **nova-2515:** add mail when event is purchased (80eeab4a4b7801bf81baecb32b6f74413e105473)

## 1.349.2
2022-12-01

### Fixes

- **nova-2591:** Add some checks to review usecases, and include some more info in requests with fatal errors (9d8950858a3740dd4ed99337ed041e34803bee23)

## 1.349.1
2022-11-30

### Fixes

- **nova-2634:** Support for "linkedinUrl" in bulk nominations (05e7309a86ec7ae171f6381ce0d308e5108fff8b)

## 1.349.0
2022-11-30

### Features

- **nova-2522:** Create new "type" for positions (6d38d2aef8aa847bdd04eb17bb5d89f29a26a469)

## 1.348.0
2022-11-28

### Features

- **nova-2531:** Axel Johnson milestone config (e28a2ba8e8db1638feacebc33dc7b655d6eb070c)

## 1.347.0
2022-11-28

### Features

- **nova-2520:** jobDescription mandatory (e9e11cdcd19f1cc7047fc982411b2859833c5f12)

## 1.346.0
2022-11-25

### Features

- **nova-2593:** add alternative email (4286146d6d5644ad232f50f14e0bf059ce5a9969)

## 1.345.0
2022-11-25

### Features

- **nova-2605:** add warn when no nominator is found (3a735e912c4847f57c94fcd4b4957c47a0ff65e2)

## 1.344.2
2022-11-23

### Fixes

- **nova-2501:** Allow event dates to be updated as null (37449d7ac26cf3b9e28565e149a6185f31016c7b)

## 1.344.1
2022-11-23

### Fixes

- **nova-2603:** add full filename to the attached file (9da6780161ad3ab48219c83b1e37425af162c814)

## 1.344.0
2022-11-23

### Features

- **nova-2530:** Add new Axel Johnson process (7788085e8c2c619087b7217c5976cfbb5e281f7f)

## 1.343.1
2022-11-23

### Fixes

- **nova-2549:** removed default for status (64c1965b976bd261e98e5e953dbf48f547fc626d)

## 1.343.0
2022-11-22

### Features

- **nova-2276:** added headline to talent (b1a5615c6e6c1eec3f9cf3a0489ab80676352a5f)

## 1.342.4
2022-11-22

### Fixes

- **nova-2449:** Allow "null" to be used as a enum value in event.format (ca767b9685d8f6615611e0443e239aa7008897a6)

## 1.342.3
2022-11-22

### Fixes

- **nova-2454:** Make admin of an event optional (23ece143f9cf91d9c47128cad642bc2dfe8c8ccc)

## 1.342.2
2022-11-21

### Fixes

- **nova-2592:** Ignore webhooks from Stripe that don't have a referenceId (a4b26fc1ace4de077d31a5ab540bebbcf4840355)

## 1.342.1
2022-11-21

### Fixes

- **nova-2573:** update existing talent (3d3b2b6625d5c7388d0804656b1c492b71d34867)

## 1.342.0
2022-11-18

### Features

- **nova-2460:** create endpoint for download event participants report (9652032296805835fb153026d2691975b917d2b1)

## 1.341.0
2022-11-18

### Features

- **nova-2538:** added levels for data privacy (867f4695e802a368138c255cde004132563a95aa)

## 1.340.0
2022-11-17

### Features

- **nova-2514:** Allow users to buy multiple products of the same type (6a5a57542378fea714900e080d17905cc32867be)

## 1.339.0
2022-11-17

### Features

- **nova-2446:** change events payload to work with full entitites (9ce23c9b88014d4edd3de53b0f6ce00c3bc15b57)

## 1.338.0
2022-11-16

### Features

- **nova-2519:** removed coding step for tech (ccdd7fe146f27435ecbee637b4a216d5612114b2)

## 1.337.1
2022-11-15

### Fixes

- **nova-2047:** Change additionalProperties to false for nomination endpoints and FileData minor fix (a5ec708bbbcaabe9335fc3ae12730235c6a83154)

## 1.337.0
2022-11-15

### Features

- **nova-2429:** Add apply to job enpoints (f50814b96ad17dc96845de9e499b3e5d682fceb1)

## 1.336.1
2022-11-14

### Fixes

- **nova-2462:** fixed validation when no schema is present (66fbedecb316388ac1432bc4ebbb1b37b6def881)

## 1.336.0
2022-11-14

### Features

- **nova-2462:** added sanitizer x-format property to swagger as middleware (246ee0cbf51ffe2b35b7bac278d271067bd8552a)

## 1.335.0
2022-11-11

### Features

- **nova-2201:** added throttle to certain endpoints requests (6c66703a6eed54a93f2323c3e39b902c4cb21987)

## 1.334.0
2022-11-11

### Features

- **nova-2540:** added new verticals for nova 111 students spain (87a056788107a1f3bbaf3a6b4a9f22d7ccda41cb)

## 1.333.0
2022-11-08

### Features

- **nova-2447:** Members endpoint to list all available events (5b8b6db8f851d7a3382759bdecf2ba29485b8c41)

## 1.332.0
2022-11-08

### Features

- **nova-2400:** Keep tracking of referral tokens in our platform (4dbfe3b42eae613cbe0a5cbf9fff8f3b365965bb)

## 1.331.0
2022-11-08

### Features

- **nova-2463:** opened 111 students 2023 process (b447f751a25eef61da22783e965660cc44a4e9f7)

## 1.330.0
2022-11-07

### Features

- **nova-2450:** add admin to accepted application model (c6cc4e580aacd3ee59d323f2406dea5bdfc84e37)

## 1.329.0
2022-11-07

### Features

- **nova-2419:** added great reasons to client position output (84ae288ea8ecc6eff64849464512e6054d15b67b)

## 1.328.0
2022-11-07

### Features

- **nova-2450:** Change template (93930286770b85d43795bf123c46123f2490ee69)

## 1.327.0
2022-11-07

### Features

- **nova-2442:** Create event entities and admin endpoints (4d3888f938ac864659fd871aa6ace0fb451d7652)

## 1.326.0
2022-11-03

### Features

- **nova-2438:** public slug to retrieve positions from the public  endpoint (e8217e2b57e9d4c5f9704279030b64f359799f81)

## 1.325.0
2022-11-03

### Features

- **nova-2450:** Change onboarding emails sequence (d709cfac5ff80ff9cf83e2658a66bf588cb62e06)

## 1.324.0
2022-11-02

### Features

- **nova-2469:** Notify PM when a client posts a job (2d0d6f6b68a4a968ef3d5f6ae48641c9ebf33e5f)

## 1.323.0
2022-10-31

### Features

- **nova-2426:** Allow to edit the position's admin (ad1946bfeae6f29f49dc53e1fdbe000e364c48d1)

## 1.322.0
2022-10-28

### Features

- **nova-2437:** Keep users logged in for longer (6 month) (bed23fbc0723312f09e857af8b349dd7b682f97e)

## 1.321.0
2022-10-28

### Features

- **nova-2367:** nominations accept new linkedinUrl param (da88efdb070baef1e5b9e5bfdddfb53e964d5aab)

## 1.320.0
2022-10-27

### Features

- **nova-2480:** does not allow to change the email to one already owned by another user (8f5c716cd1e7d285af767885c91c129c05af39c2)

## 1.319.1
2022-10-27

### Fixes

- **nova-2492:** Questions in Forefront applicant report are not being downloaded properly (d3e5b7aed5d896f3ae74dfbeea826abfd70c1bf7)

## 1.319.0
2022-10-26

### Features

- **nova-2399:** Make an endpoint for Nova members to retrieve and filter open positions (4ba327305403d838e965f3bfad4d459b66c24b66)

## 1.318.0
2022-10-26

### Features

- **nova-2396:** endpoint to create users in gravity (5f5a841e7d62220f9466140c5f713a369ad0ad40)

## 1.317.0
2022-10-24

### Features

- **nova-2295:** clients can retrieve and edit draft positions (cc853b77b6afeba9e5524e17642cbc39fe05b12b)

## 1.316.0
2022-10-24

### Features

- **nova-2481:** lower ob emails hours from 72 to 48 (1efeddd5da8a246b0dbeb3cadf7177242bd7aff1)

## 1.315.0
2022-10-21

### Features

- **nova-2398:** add website and description to client (295e22c95b6c389736a291539e2aeb529cf4230d)

## 1.314.0
2022-10-21

### Features

- **nova-2467:** add filter by product visibility to PTA report (dbeea73e0a2091be42aa98dffc77602f8f539376)

## 1.313.0
2022-10-19

### Features

- **nova-2418:** connections and events removed from the accept process (263521803d3fe5313b8d1dab7bfdb12656a7df4e)

## 1.312.0
2022-10-19

### Features

- **nova-2374:** HTML sanitizer (3074499a19447da1e8c81eea0569d0d56f37fd58)

## 1.311.1
2022-10-18

### Fixes

- **nova-2389:** fixed the update of application statuses (63db3168a949d78dc16585ade48d1cf119efb7e2)

## 1.311.0
2022-10-18

### Features

- **nova-2414:** add pta allowed users report (d026bd23ffb49708bc75412528636efb2582e252)

## 1.310.0
2022-10-18

### Features

- **nova-2394:** Implementing "type of event" and "event category" taxonomies (f16b38f772b09aa1ed62e8f93cad5c98102879ab)

## 1.309.0
2022-10-17

### Features

- **nova-2395:** added availability report (0879b5a5be054e6a9468cc9e42a83e66d48603cd)

## 1.308.1
2022-10-11

### Fixes

- **nova-2244:** fixed property mispelling (53f3f3dbe87aae47552b34bdf50e9d4b1832f16c)

## 1.308.0
2022-10-11

### Features

- **nova-2416:** change forefront email templates (33418d649396eb94ed458322def90c0bce37a815)

## 1.307.0
2022-10-10

### Features

- **nova-2278:** updated client position outputs and opened some taxonomies for clients (36810669eb6507bd39ef25fb80a7988c6b2a4dbb)

## 1.306.0
2022-10-10

### Features

- **nova-2264:** changed talent's nationality and city of residence to taxonomy (2d9f8778375a9a5fb85cb818ae92334b3eacc813)

## 1.305.0
2022-10-10

### Features

- **nova-2243:** added the taxonomy objects to client position entity (3eed06d7cd80381e003a825af7c706bc639ac11a)

## 1.304.0
2022-09-29

### Features

- **nova-2382:** deploy kinnevik process (c6c0086db3679f658e4284128f425d83c619f230)

## 1.303.0
2022-09-26

### Features

- **nova-2269:** Changes in member profile are reflected in Gravity (2ab685f9b62f2e5996cae5e9e35e16255b074d52)

## 1.302.0
2022-09-23

### Features

- **nova-2240:** updated creation form for client positions (f389a9a7568530b662eeaa0375639c84b8eb8218)

## 1.301.0
2022-09-22

### Features

- **nova-2307:** Add new fields to internal details (a45b4a1853bab866d72592b74beb6c3594a6b391)

## 1.300.0
2022-09-20

### Features

- **nova-2325:** Add United Kingdom & Germany as markets in Radar (42bb5046df8d6a399d093a4a9b9184080d92ef79)

## 1.299.1
2022-09-13

### Fixes

- **nova-2344:** stop error for applicants with no nominations (cfc538484db75f2be6316471b7a4a8e1c28e1704)

## 1.299.0
2022-09-12

### Features

- **nova-2247:** sorting interests by group id (850a286e3d0b55a4cfc60b76341bbdc9ecddb09e)

## 1.298.0
2022-09-12

### Features

- **nova-2263:** added headline to sync process (7f2bdb61450a7405944e0b14cce2006bf7ab73b3)

## 1.297.0
2022-09-09

### Features

- **nova-2234:** added logs for client position status changes (ab105e931890d758b75edf4f435005d1fdaeae7e)

## 1.296.0
2022-09-05

### Features

- **nova-2282:** Add test (c7ae81ed26f55509b3eb7ca84f1937f22e958e02)

## 1.295.1
2022-09-01

### Fixes

- **nova-2277:** improved query for funnel report (8212aa316decf74aa68449e7952aa5eb1387fc5a)

## 1.295.0
2022-08-30

### Features

- **nova-2235:** Create Client Position Internal Details entity (05821844bb947b66fe2ad7622fdb936c999bbef4)

## 1.294.0
2022-08-29

### Features

- **nova-2231:** Update Client Position entity, table and endpoints with the new fields (bbd601f529d6d4f866afdc73241bf8abdb092ad7)

## 1.293.1
2022-08-24

### Fixes

- **nova-2223:** handle error responses when retrieving user (d07e6ca610f301bd58c3ee5a9a0b73e893f6f6b6)

## 1.293.0
2022-08-24

### Features

- **nova 2280:** Make admins able to change roles on radar (616f57a2b51dc79535e7dff254949cae8346155b)

## 1.292.1
2022-08-24

### Fixes

- **nova-2281:** added support for local environment (64747fc189b6e57d7f45d9062ef6424e06947060)

## 1.292.0
2022-08-24

### Features

- **nova-2246:** Update gravity user picture url when updating user avatar in DA (ae19d0f3c34237b5fd10527a2cb9802203cca9ff)

## 1.291.0
2022-08-24

### Features

- **nova-2226:** added proxy for gravity (125db440f90b93121ab8db3eadea841ea6308b08)

## 1.290.1
2022-08-22

### Fixes

- **nova-2275:** fixed deleted filter (ce0d2a933393b454033ef9fd1de7f5acce2b472f)

## 1.290.0
2022-08-19

### Features

- **nova-2225:** add isHighPotential to nominee report (3207b569fc2536421ff7cef6b08c0f184bf2a337)

## 1.289.0
2022-08-19

### Features

- **nova-2249:** Fix bug where talent cannot retry IQ test (586f92a646cbf9ace561228e06bb3fc7d3ad2df8)

## 1.288.0
2022-08-19

### Features

- **nova-2069:** added endpoint to get connections (f61ad9e50e5979a92a3ed312415d1230c9de371f)

## 1.287.2
2022-08-16

### Fixes

- **nova-2221:** use results average score when average is null (17f1059c57bba0ff1d72d652c67cd1689c661f22)

## 1.287.1
2022-08-12

### Fixes

- **nova-2220:** removed login constraints when a process is closed (5082f2f0d25decb9d714cea394b2e470955fd81f)

## 1.287.0
2022-08-12

### Features

- **nova-2210:** Allow admins to retrieve and update available products for an user (2b1f57a1bf562a4862a9d89359ec6ac51398d06b)

## 1.286.0
2022-08-09

### Features

- **nova-2212:** Allow to send messages flagged as automatic from the user side (1e4466810e89f7baef0cc744dca72ac9ece6d0d2)

## 1.285.0
2022-08-08

### Features

- **nova-2213:** Add check for product approval (b0b6bc94471b67fb3ed3b604b243429249f2d643)

## 1.284.0
2022-08-08

### Features

- **nova-2209:** add approval status and approval status required to product output (2b4d272b41315ecb6f31555d2e83eaeeb51b4206)

## 1.283.0
2022-08-05

### Features

- **nova-2182:** added cron to sync unsynced talents (a12915b7f7ecc072fad04d931fe030765ba85675)

## 1.282.1
2022-08-03

### Fixes

- **nova-2219:** When removing an assessment, always mark the step as... (5d960cd6b0bb0499b0c207514184495efb6b88f4)

## 1.282.0
2022-08-02

### Features

- **nova-2124:** Move IQ test from TDL to Testgorilla (73c163d455aec4187178f8cc2c3a862cecfb688a)

## 1.281.0
2022-08-01

### Features

- **nova-2064:** added gravity onboarding milestone (5a2ab96ec5f2083872b36f801d8bb4c2e2a06771)

## 1.280.2
2022-07-29

### Fixes

- **nova-2123:** prevent from moving away from accepted (a977c7e1ae62e7ccbb96268b927d91aea290539d)

## 1.280.1
2022-07-29

### Fixes

- **nova-2196:** Clean "score" in talent domain entity (8743bde7efb03805814974e5b4a11e60a9fe92e1)

## 1.280.0
2022-07-29

### Features

- **nova-2193:** Stop sending data to YOBS (ca515515d2892c729517aea45c0431dfcecc3ca7)

## 1.279.2
2022-07-28

### Fixes

- **nova-2206:** fix report query (8180be70c3091ec81fd2dee64343c7b069689e75)

## 1.279.1
2022-07-28

### Fixes

- **nova-2206:** fix reports with new scores (a715352d3ed4b6000fdffb6da6b3ff2ffdfc2ea0)

## 1.279.0
2022-07-27

### Features

- **nova-2206:** added applicants report for 111 (fc74d2bcb43e8f2f2dc2bc55f5160d1c7ff03537)

## 1.278.0
2022-07-27

### Features

- **nova-2164:** added new interest group taxonomy (cfd522cc8c3b9a3ba00bd045db87071c73966937)

## 1.277.2
2022-07-26

### Fixes

- **nova-2205:** fixed query to use application score instead of talent (0dfa4db2f5f2f38c2250dee0e6691168b98cc6bd)

## 1.277.1
2022-07-20

### Fixes

- **nova-2078:** When saving a score, don't change 'updated_at' date (12a16b42dc867d613efe56ba63d1ba1a6e12e333)

## 1.277.0
2022-07-19

### Features

- **nova-2080:** Decommission old score calculation process (758320ffa224705949d2695b2ff36d3d774b4aa5)

## 1.276.0
2022-07-19

### Features

- **nova-2079:** Recalculate scores for all accepted talents with new process (33739b5ede68d2ad621808bdcce45a0a01837d98)

## 1.275.3
2022-07-18

### Fixes

- **nova-2076:** Check if talent personality data is present in order to calculate affected scores correctly (6b484e599e65659d2fb0e99ed69beb838df70c82)

## 1.275.2
2022-07-13

### Fixes

- **nova-2189:** changed metrics to use only mixpanel (540cb769ad790d9561a8479efec329f91162a76d)

## 1.275.1
2022-07-11

### Fixes

- **nova-2188:** discard subscriptions from checkout (df66ba0296f68111cfc3450bb4771c11dc872e27)

## 1.275.0
2022-07-11

### Features

- **nova-2116:** Send onboarding mails based on processtype + vertical (c504abaa4635341fe0066556405d2d94c9eeccf8)

## 1.274.3
2022-07-08

### Fixes

- **nova-2179:** dont sync if the talent is not accepted (34881205babe5f67238df193bfaf84f3f8e0e381)

## 1.274.2
2022-07-07

### Fixes

- **nova-2076:** Avoid scores of infinity if no data is present (d9efb6c7d4eafa3416d76630e6134768b6af95b8)

## 1.274.1
2022-07-07

### Fixes

- **nova-xxx:** fix for steps without payload (7a2077315ef0b10441fe43aa2a5246c94fe8efa0)

## 1.274.0
2022-07-07

### Features

- **nova-xxx:** secret metrics project (19e244d7cffcdca22ef8a55304a426f04a3c7ec0)

## 1.273.0
2022-07-06

### Features

- **nova-2078:** Calculate scoring with new process (30dbe0a305d0e9cc0a2613fa8ac7169dfdefaf07)

## 1.272.0
2022-07-06

### Features

- **nova-2077:** Implement scorecards functionality (9ffaf764d35ebb91d2f40aaf0d55f625cda1df6d)

## 1.271.0
2022-07-04

### Features

- **nova-2076:** Scoring modules (43dd4ef142d6c9761e5c6cb2943a556a608267e0)

## 1.270.1
2022-07-04

### Fixes

- **nova-2157:** updated updated_at for a position when the status has changed (399d3d7be2356a4535ec4b5f12f341cd58989fd0)

## 1.270.0
2022-07-01

### Features

- **nova-2162:** user deletion service that prevents the deletion of admins (4767a430983bac47963eaa9f14cff111fd3ea254)

## 1.269.0
2022-07-01

### Features

- **nova-2148:** Monitor webhooks activity (e9c1e921a7bfe5a915d056153628135f8e03c086)

## 1.268.1
2022-06-30

### Fixes

- **nova-2158:** created a new stripe url when a checkout session has expired (6964039d8313e411853f9eb1cdc46b525de2b5ab)

## 1.268.0
2022-06-28

### Features

- **nova-2023:** added update vertical endpoint (6d7f8b1f6465d513da9d3eb6a064acdf9297c072)

## 1.267.0
2022-06-22

### Features

- **nova-2146:** sent vertical param to nominations url only for software applications (6adcacb64cfe9e38ecc7f62fbe25b6753995f757)

## 1.266.0
2022-06-22

### Features

- **nova-2017:** Add talent to Hivebrite cluster depending on birth date (f3368860dcf3f60d375ab41f1d227b3171ff5bd0)

## 1.265.2
2022-06-22

### Fixes

- **nova-hotfix:** fixed error with stripe webhook (e9a9eeae23cf5dec27c80d82be1ecd973accecea)

## 1.265.1
2022-06-21

### Fixes

- **nova-2145:** fixed copies (31bd336c900b1af2b80832401de3b23ad3a603bd)

## 1.265.0
2022-06-21

### Features

- **nova-2089:** added admin info to notes (c20f511fdb5bca5b2af885e13b8037601c3603c3)

## 1.264.0
2022-06-20

### Features

- **nova-2090:** Change mail address TA send to talents to members@novatalent.com (889fb0ec83d71d93258734fc9dd25b9d860cccde)

## 1.263.0
2022-06-16

### Features

- **nova-2008:** updated url in available nominations (f7c508d1103ee44c6cd19760f540f78a29f4e71c)

## 1.262.0
2022-06-15

### Features

- **nova-2038:** add subtype to product (ff536ece6073f75f90dd5d60f5eb4b215104a679)

## 1.261.0
2022-06-14

### Features

- **nova-2091:** increase / decrease yearly TA session depending on sessionType (99130270b0f9014c1501be1326b897965ceb1bd6)

## 1.260.0
2022-06-10

### Features

- **nova-1994:** fix private nomination endpoint (f4183c118a4226ddfcdd1b4bfae4ad47eefd3b98)

## 1.259.0
2022-06-06

### Features

- **nova-1980:** Add corresponding TA_SUBSCRIPTION to all accepted application talents (8c35fda3076a73f3cb986b98e882bb90b1d6c8f2)

## 1.258.0
2022-06-03

### Features

- **nova-2015:** send email and in-app message when member hires TA Premium (e19a7ba9f47b0db3cf4341d670e38ee1d267421a)

## 1.257.1
2022-06-02

### Fixes

- **nova-2043:** show all admins (58ecc033f001edf8c03bca74cac7bb71a8d2004d)

## 1.257.0
2022-06-02

### Features

- **nova-1960:** added get providers info endpoint (32a7daa4fdbd1813c1fef6ceadcf69ff4515763e)

## 1.256.0
2022-06-02

### Features

- **nova-2002:** Cron to restore features initial values after a year (23a96bb1865da001396a96d7dc99a013be0274a0)

## 1.255.0
2022-06-02

### Features

- **nova-1995:** implement magic link reset (6edd38b3097627758b5b3fd167bb5b916a46b804)

## 1.254.0
2022-06-02

### Features

- **nova-1998:** removed unused nominations fields (d8513cede2346af84d627585d458e64a8aa3bac3)

## 1.253.0
2022-06-01

### Features

- **nova-2001:** When a session is registered lower the amount of available sessions for the user (398391f460751ce195984ac253b05caef4a9df1e)

## 1.252.1
2022-06-01

### Fixes

- **nova-1993:** updated stripe success and error urls for premium talent agent subscription hiring (0119b328cf77d7bbe21cb4d34eadcabb8482d10c)

## 1.252.0
2022-05-31

### Features

- **nova-1992:** added product to hired product (cf3f5dffbbeb156119da9cbe0b05de84dba59467)

## 1.251.0
2022-05-31

### Features

- **nova-1978:** send email to talent when TA sends a message to him/her (5b34c50846872945507717d706e1e90989e64668)

## 1.250.0
2022-05-25

### Features

- **nova-2030:** Add firstname to mail template (61f4704fd1f837eb5b71c9e33732947defc90121)

## 1.249.0
2022-05-24

### Features

- **nova-1967:** Daily cron to check hired_product status (b93c9505043f54f4c731e077636123023f8e833b)

## 1.248.0
2022-05-24

### Features

- **nova-1966:** handle webhooks from stripe (3e2e0d83565192555ab859ae2a5868752fafa3d4)

## 1.247.0
2022-05-23

### Features

- **nova-1908:** Allow to delete and expel talents (68b13a7b6ee208591c0a92e5486c2bd4d906f557)

## 1.246.0
2022-05-23

### Features

- **nova-1963:** Get hired products and features (ce223797460f2d64dd6da885c65af77e5800e343)

## 1.245.0
2022-05-20

### Features

- **nova-1965:** Get products by type (8fca8a366a9a0305152845709404a18ba2266963)

## 1.244.0
2022-05-18

### Features

- **nova-1964:** allow members to hire products (c77ad9bdc54c1f1b75fb7f7639e9ba3b5b8a2628)

## 1.243.0
2022-05-13

### Features

- **nova-1990:** Talent sesion can only have one note (1048572f1c679b222cedbb464c30b226f9508d11)

## 1.242.0
2022-05-12

### Features

- **nova-1901:** Generate LinkedIn data report (fd0921c1e9647ffdda2f90b2db43528bb0925980)

## 1.241.1
2022-05-10

### Fixes

- **nova-1985:** Allowed talent agents to update talent info (89b3685a16a6fa9382c259d86475281985fe11d3)

## 1.241.0
2022-05-10

### Features

- **nova-1893:** download talent agent sessions report (da842730441b95ec35742b687311a75d3e421128)

## 1.240.2
2022-05-10

### Fixes

- **nova-1982:** allow all tas to update talents if the admin is not changing (5536e7a26f40283c2d5ff8e39cf6b1f969233655)

## 1.240.1
2022-05-06

### Fixes

- **nova-1976:** fix score always using scores of same process (81c2073fc1f04077a4aec7c1cbee56d6f87a5f0a)

## 1.240.0
2022-05-06

### Features

- **nova-1852:** list single candidate (893c99a973ae97bf8627783021ebe5bd70e0aa47)

## 1.239.0
2022-05-06

### Features

- **nova-1748:** accepted null in experience patch (ae2acbfa6f40c4f1cd7ea61930e7fee4927e36f3)

## 1.238.0
2022-05-05

### Features

- **nova-1891:** Create ta session and notes entities (3359c4964da6a9e950c2743614d16b31ccb2ede8)

## 1.237.0
2022-05-05

### Features

- **nova-1954:** Bug on profile picture uploading (62460cd35519e9aa7db567d5110fa6df9c93ca7f)

## 1.236.0
2022-05-04

### Features

- **nova-1921:** store accepted at field for applications (fcd062832c1bf0608840b54c92d13e68192577ce)

## 1.235.1
2022-05-04

### Fixes

- **nova-1969:** Fix reminder email variables (d44a0f4c1b3793c3f11443968890c39674e535a4)

## 1.235.0
2022-05-03

### Features

- **nova-1849:** added some properties to patch position endpoint and client position output (2605bebed12d86bebba06e32cac1792ea4338c32)

## 1.234.2
2022-05-03

### Fixes

- **nova-1968:** udpated templates for 111 italy (13888fb7cd6dfc2cfb04a6da6cd562ae6c7a4894)

## 1.234.1
2022-04-29

### Fixes

- **nova-1962:** updated referral templates (804032cdbb027d90f60c081f6f9e51a6e4993a91)

## 1.234.0
2022-04-28

### Features

- **nova-1783:** disabled webhook (6c4e5421e4dbb69b5ab09ece8593df97128263e3)

## 1.233.1
2022-04-28

### Fixes

- **nova-1952:** get subsectors endpoint now supports sorting defaulting at sort by name (68968c467a1f67aa4aaf281e32e3bd3cfa715e06)

## 1.233.0
2022-04-28

### Features

- **nova-1942:** Order Professional & Educational experiences by date in DA & DABO (a396a2bb8d5803c236e1f98283ae04037db0d374)

## 1.232.0
2022-04-27

### Features

- **nova-1832:** Allow admin to change talent agent for a member (0e3e3c54cc9e34da4650779662fd8069cc2b9809)

## 1.231.2
2022-04-26

### Fixes

- **nova-1847:** fix create position endpoint (15c1c2d480bab26a5dcb73e4a820ef7b6e33c40f)

## 1.231.1
2022-04-26

### Fixes

- **nova-1948:** stop requiring subsectors for patch, it breaks old experiences (ec0b938d2a247516f09fe03d28932405a0185eca)

## 1.231.0
2022-04-25

### Features

- **nova-1928:** added verticals for italy (324c875c079c345d9029e686beb20b139306b8d3)

## 1.230.0
2022-04-25

### Features

- **nova-1795:** refactor nominations use cases and service (b9bf3cd2c381cc37906bbdeb06f3b3a5d770b4df)

## 1.229.0
2022-04-22

### Features

- **nova-1844:** status is optional in update client event endpoint (e1a1ec5823dc23da8a14c41f097cbca8de2d414f)

## 1.228.0
2022-04-21

### Features

- **nova-1922:** disable hb invitation email (16f74c7744d3b0e8f20001530e37974d7c771168)

## 1.227.1
2022-04-20

### Fixes

- **nova-1922:** updated mail templates (f0ad7a29347de2660a3d8585bbd6c43c684d15d6)

## 1.227.0
2022-04-20

### Features

- **nova-1912:** updated error message (99f5d739c119ebd8f5e854bf1228f208d7e7de35)

## 1.226.0
2022-04-19

### Features

- **nova-1848:** add GET endpoints for position (8f482a43dd5ec10cce873df076b2a4ebdd0bd87e)

## 1.225.0
2022-04-19

### Features

- **nova-1907:** talent email can be updated by admins (03a71e469da0c8477f00976801e8402f418d1ba9)

## 1.224.0
2022-04-18

### Features

- **nova-1910:** reset password redirection (d1a4b2bb58dc64c67060e18c3b1301cb036ffc7b)

## 1.223.0
2022-04-18

### Features

- **nova-1859:** accepted adminId in patch client endpoint and created delete client endpoint (b227af4e94df58d71c5085c0c06c663165c912bf)

## 1.222.2
2022-04-13

### Fixes

- **nova-1886:** fix applications sort (edd5f28dd8ff962cf85c431aacb11eae855f2af6)

## 1.222.1
2022-04-11

### Fixes

- **nova-1839:** handle errors nicer (e58110cbf949ca756d5279fa0c2d6322a9f09be1)

## 1.222.0
2022-04-11

### Features

- **nova-1839:** candidates entity and endpoints (56b8e9d5e98e2970641d4626eb0a8c35ac55e84b)

## 1.221.4
2022-04-07

### Fixes

- **nova-1909:** fix hb event handle (8f7c5a0c6dddcf05630555581cbc42103e98bf0a)

## 1.221.3
2022-04-07

### Fixes

- **nova-1909:** added better logs to debug whats happening (119d1a064e17fdd631d797aae9720aec1bae5e7c)

## 1.221.2
2022-04-07

### Fixes

- **nova-1909:** fixed error logs (58844d1ca318dee6cbd0ffd94da6b284321da740)

## 1.221.1
2022-04-06

### Fixes

- **nova-1841:** fix client count (5527db958a7f040ea8efaeef562a1625f967751e)

## 1.221.0
2022-04-05

### Features

- **nova-1878:** change vertical names (35395a714f16c62246fddd5dda57d72b1d044183)

## 1.220.0
2022-04-05

### Features

- **nova-1838:** added admin endpoints (a0f69d60cef3b9e0ea603a6dfc5a2bd6a8d2afb2)

## 1.219.0
2022-04-04

### Features

- **nova-1837:** add pagination and filters to clients endpoint (de0d9a64ca8c287f19550df65ff4798d393f1432)

## 1.218.4
2022-04-04

### Fixes

- **nova-1883:** fix buffer to string error (81b62db83c9a4ccf810898a6e318be101f172942)

## 1.218.3
2022-04-01

### Fixes

- **nova-1882:** fixed log that overflows with buffer (8f5e4a790f02cff470e03aa14fe8307b7599bba8)

## 1.218.2
2022-03-31

### Fixes

- **nova-1825:** update role in intercom when updating (3fcddd561bccbf24e2204bf9fa8c2bb95e0ed0c9)

## 1.218.1
2022-03-29

### Fixes

- **nova-1797:** hotfix for talent sync (9ddccf72e3c0a8e54a32ca76334c6707dfeea842)

## 1.218.0
2022-03-29

### Features

- **nova-1781:** update intercom and hivebrite profiles (4d7fc316be00e11b7272e62e480caec0df1dbc61)

## 1.217.0
2022-03-28

### Features

- **nova-1767:** update hb picture when updating user picture (2790585b228ce84e07b46cd8a8765460db1cb2dc)

## 1.216.1
2022-03-24

### Fixes

- **nova-1797:** updated logs and controller handles (5b34951d64508590e4573cb1bd08474d5d8f8e4f)

## 1.216.0
2022-03-24

### Features

- **nova-1769:** Allow users to store their profile picture (d2b855457658c1889086aab223c08b5dfb9515e0)

## 1.215.0
2022-03-24

### Features

- **nova-1746:** added talent to application output (a464760d08dd0fef188532701c211b58de48ab36)

## 1.214.0
2022-03-21

### Features

- **nova-1746:** return user model in talent (65913ee58c6fea6e77d9593a86328fa23dda6705)

## 1.213.0
2022-03-18

### Features

- **nova-1722:** implemented milestones actions (0fa0f34a00c072a81b2d4d2988b83c8696194781)

## 1.212.0
2022-03-18

### Features

- **nova-1782:** allow to disable the sending of HB invitation through an ENV var (0ee4c590eb08ad2ce3fbf5fbb0d1a5d1e5346f69)

## 1.211.0
2022-03-18

### Features

- **nova-1779:** splitted talent usecases (d5fec434407ae1b21bc9765d1380ba508c3bf551)

## 1.210.1
2022-03-18

### Fixes

- **nova-1818:** fixed connection name not matching position (80d313190c780d60eec3888f97e847749120df12)

## 1.210.0
2022-03-16

### Features

- **nova-1820:** changed vertical names for Sweden (d16ac55a48c1c91277903fc02ece14bc5498452d)

## 1.209.0
2022-03-16

### Features

- **nova-1757:** create salary benchmark endpoints (4b3990c417befd7a54b140c84d1a3da3adf1609a)

## 1.208.0
2022-03-16

### Features

- **nova-1735:** add software users to the right group and role in hivebrite (62ea277d847739c2d3ce7816c86a21fb07937bdc)

## 1.207.1
2022-03-14

### Fixes

- **nova-1717:** fixed free position input patch experiences (d743eee8594b3a37447abab071782666afcb2327)

## 1.207.0
2022-03-14

### Features

- **nova-1758:** filter main experience (d59c3628635c811b7060f364194e660376440019)

## 1.206.0
2022-03-14

### Features

- **nova-1715:** Implement talent experience information endpoints (6ad5a7749260d10faed38f4b601fb3e7f2017e25)

## 1.205.2
2022-03-11

### Fixes

- **nova-1564:** fixed wrong usages of entity id (b9faabf483ddf68e0b8681b7b437526af674acb6)

## 1.205.1
2022-03-09

### Fixes

- **nova-1564:** added small fix to store market id (504c4ef09a4ada81a23e5815102d500ac1911ec8)

## 1.205.0
2022-03-09

### Features

- **nova-1713:** talent can select one and no more than one main experience (825e420d0b23cb19cf3c39634a230201fb5b1b18)

## 1.204.2
2022-03-09

### Fixes

- **nova-1564:** fixed magic link nominations (5572e8587cc94ed634d22cf525dc955c77211681)

## 1.204.1
2022-03-08

### Fixes

- **nova-1564:** min fix to workload report (3faee448e5adf550921d3e99626a8ca5d4279f22)

## 1.204.0
2022-03-08

### Features

- **nova-1712:** added currency taxonomy (396cd65e49402509028c9d3b7d4659e6665ffdd1)

## 1.203.0
2022-03-08

### Features

- **nova-1564:** refactored user and talent entities (1d5e6cec2a4318f9323afa0175055f4f6c173e0b)

## 1.202.0
2022-03-08

### Features

- **nova-1714:** Implement talent setting endpoints (81f1a8da4a994380238e9ba5356b9800c903cb99)

## 1.201.0
2022-03-08

### Features

- **nova-1753:** change funnel report from 5pm to 3pm (0b3fa56f3397a99fc66c8fbce36731b7a6c8dcad)

## 1.200.0
2022-03-01

### Features

- **nova-1676:** added notifications (b449e6185d752a8dc2a05fcb29c66308489dcbe6)

## 1.199.2
2022-02-28

### Fixes

- **nova-1756:** fixed application without nominators (2b6a67f7a544c91f6a319e64e97cd3f185fe1212)

## 1.199.1
2022-02-28

### Fixes

- **nova-1675:** fixed talent messages endpoints (9b19e2ba0a1e4fd2eddfe2dbf62c14afa0fcb817)

## 1.199.0
2022-02-25

### Features

- **nova-1671:** allow clients to login in digital agent (9e901620f21a3a4b5488cac21cff74a1cfcba045)

## 1.198.1
2022-02-24

### Fixes

- **nova-1708:** added little fix on getting last onboarding emails (9d9b6aed8280cb653cfa4be4846957142d74c945)

## 1.198.0
2022-02-24

### Features

- **nova-1674:** added get messages between users (6941adadc6db9bbd96937d949bff47cd9db073b5)

## 1.197.1
2022-02-23

### Fixes

- **nova-1734:** show null type users (c63b6ee90d94ef694bf83f10ab61c0294cddcc33)

## 1.197.0
2022-02-22

### Features

- **nova-1640:** client endpoints (efc87eee4fe4e6a613ca7dc46840feed97af80ed)

## 1.196.1
2022-02-21

### Fixes

- **nova-1711:** added headers to test gorilla requests (a55d20473b24010fbca315a7bbb7f4a1ec8b22cc)

## 1.196.0
2022-02-15

### Features

- **nova-1605:** remove engagementLevel from experiences (1320429e94f7d31f556b22f4b00b06d582057799)

## 1.195.0
2022-02-15

### Features

- **nova-1605:** removed unused fields from experience and education (f537ef8368db8ea4a6e0b4d999aa37c7a24ea05a)

## 1.194.0
2022-02-14

### Features

- **nova1659:** add new role to enum type (002f42a2f06f4fbae6e5591f363e53c99c80ac46)

## 1.193.0
2022-02-14

### Features

- **nova-1510:** added get admin by id endpoint and refactor (2df15e08b80e2d5df36e826a2fba9aebf7796596)

## 1.192.0
2022-02-11

### Features

- **nova-1487:** include vertical in nominee report (4367e630a1843db054aefbb96f07b383f4220fa3)

## 1.191.1
2022-02-11

### Fixes

- **nova-1584:** add sort to taxonomy cities and roles (6e6d9f8c7bf9c03dbd81fd7b19d1748020da2c77)

## 1.191.0
2022-02-09

### Features

- **nova-1555:** add admin information to onboarding emails model (4da320e5d073ffc08bfc16ec92bd7e5425095f87)

## 1.190.0
2022-02-09

### Features

- **nova-1554:** send owner to intercom (5c251388f9d671131f410df435e241af3f4630b5)

## 1.189.0
2022-02-08

### Features

- **nova-1616:** added sso endpoint for hivebrite (2afe47e636e9f9eda7723b790cc47b687f320ed3)

## 1.188.0
2022-02-08

### Features

- **nova-1552:** add adminId to talent (5ed2cd146fa8a2c563b1fc71af4179aa08810f12)

## 1.187.0
2022-02-07

### Features

- **nova-1544:** added new admin entity (fbdfc8e60a21d92c025303474ecb73ad12f2ccef)

## 1.186.0
2022-02-07

### Features

- **nova-1606:** added me nominations endpoints (aa4595ee3a4d3ce4b8449b62ad061f06eee61b01)

## 1.185.0
2022-02-03

### Features

- **nova-1571:** add transitions to expelled status (bed32e408b110d584af4cfe009b08ca9df686482)

## 1.184.0
2022-02-01

### Features

- **nova-1623:** add talent-agent logout endpoint (1a76eaedb3f9ba547f90f34418e5025b929f253d)

## 1.183.1
2022-01-31

### Fixes

- **nova-1506:** fixed endDate educations patch accepted type (fd6257995391faf254d3349f0cb04e5a2017b574)

## 1.183.0
2022-01-31

### Features

- **nova-1506:** added admin endpoints to allow TA update talents profile in DABO (1205ea58300a4af24fe23852edd074997201be09)

## 1.182.0
2022-01-27

### Features

- **nova-1501:** removed user type (1ba1778ecc10ff166bcfcc8c011a22bbfc789580)

## 1.181.0
2022-01-27

### Features

- **nova-1386:** create review when creating application (feeef85e207cc4b1147ef2c15231dae263f3f6aa)

## 1.180.0
2022-01-26

### Features

- **nova-1576:** migrate to v3 memberships API (efae9adcb083a33259a35a4745c84f392b423169)

## 1.179.0
2022-01-26

### Features

- **nova-1504:** make reset password work for user instead of talent + application (bd7577a616d2c6c2d28c691a886549b5a663ab25)

## 1.178.0
2022-01-26

### Features

- **nova-1481:** update test gorilla assessment every 58 days (eafe154d7b53eba04a738931585a62b7dd45bcdc)

## 1.177.0
2022-01-25

### Features

- **nova-1488:** update queries to stop joining application with motivation table (d621e7c8dbe9ec585ce2e96de18dc9a5b62f49a8)

## 1.176.0
2022-01-24

### Features

- **nova-1528:** added expelled status (0ae1fbe0bc75b4e6e23ba6d4e6eda54c051f25a9)

## 1.175.1
2022-01-24

### Fixes

- **nova-1480:** added security to all endpoints (30a0a4eacfdd736738193891208c813d793deb8e)

## 1.175.0
2022-01-21

### Features

- **nova-1503:** add talent agent login (1208396521b4a75b051ea02df445e516e90858a8)

## 1.174.0
2022-01-21

### Features

- **nova-1486:** add set user type when we update the application status (4f1e44045c49e2beb92aca5e58ac17ef8f864364)

## 1.173.0
2022-01-20

### Features

- **nova-1529:** added 111 sweden details (3471657b8a8afb2de2dfdb8e9b39f34c27115e31)

## 1.172.1
2022-01-18

### Fixes

- **nova-1439:** fixed deleteLoggedTalentExperience controller (f988e87e307621bd53e56574355a19d03d0fe175)

## 1.172.0
2022-01-18

### Features

- **nova-1405:** modify  send report email (5e3f4d025a0952984c7d602ebbb250f786a36fbc)

## 1.171.0
2022-01-14

### Features

- **nova-1406:** add test gorila scoring (1a917532c9c0dd4e5a29cbea4bab7dff21b5b2b5)

## 1.170.2
2022-01-11

### Fixes

- **nova-1472:** add security to bulk nominate endpoint (db835090c63711624e095a4c107fba6d89706a9a)

## 1.170.1
2022-01-11

### Fixes

- **nova-1465:** minor changes not related to the ticket itself (4ccef133f1d030b43a7b06db2a2d8c5db5ec14d4)

## 1.170.0
2022-01-04

### Features

- **nova-1389:** add logic to recalculate deadline when move application status to started (e2ae944cb78adf98bdc4ddb92ea81b98208acc01)

## 1.169.1
2022-01-04

### Fixes

- **nova-1462:** empty spaces not considered as personal message (efa6f5ae2a019e246d476c528c0325ee392429db)

## 1.169.0
2021-12-29

### Features

- **nova-1398:** add logic to move the application to nominated when deadline.... (b08e32ab0d39910603d645b510e31676dff84342)

## 1.168.0
2021-12-29

### Features

- **nova-1373:** add verticals to funnel report (b5b4730e23d1931a99ac63faeae3738d93474388)

## 1.167.0
2021-12-29

### Features

- **nova-1293:** added suggested verticals to nominee report (6cfed3e85fc4cb711bd21dba4724a33347256cd1)

## 1.166.0
2021-12-28

### Features

- **nova-1388:** work with vertical ids instead of names (c734f928463580f4b470799ee54b0fccdf4e5777)

## 1.165.1
2021-12-27

### Fixes

- **nova-1308:** updated test gorilla id (30b717b4e2f6e79a52906ec3d3dbf8bd384fe861)

## 1.165.0
2021-12-23

### Features

- **nova-1416:** add endpoint to login talent accepted (f7a900efd78ba53e04675dcc396a040c74835d01)

## 1.164.2
2021-12-21

### Fixes

- **nova-1448:** handle dropout login (f792d034c6fde1053157315f83c274041d109c2e)

## 1.164.1
2021-12-21

### Fixes

- **nova-1376:** fixed bug where missing users report was not working (1cde55ce1f49b3dc64b0a23ea5bf86a4c729cb0a)

## 1.164.0
2021-12-21

### Features

- **nova-1308:** added test gorilla functionality (1f45aac9241a69709df9535cad3d318f8d1d2a38)

## 1.163.4
2021-12-20

### Fixes

- **nova-1360:** funnel report shows history from 1 year (3db8da033710564db987f858b5ab83df4909ba1a)

## 1.163.3
2021-12-20

### Fixes

- **nova-1375:** fix get application to with process type NOVA (8b5b1553a29c2192d865ad1d8c262e3de170001b)

## 1.163.2
2021-12-17

### Fixes

- **nova-1165:** removed personality test (a1d1dd44f16d57c843d6c78ff892fa2c423ec107)

## 1.163.1
2021-12-16

### Fixes

- **nova-1412:** add conditionals to fix submit application (f3c27193f79b9235af4e2d330474b9377c2d8b4d)

## 1.163.0
2021-12-16

### Features

- **nova-1375:** add sync to hivebrite when some information is changed in HB (cf68f62f4fa9441538aed4554094d9ddd01a4dea)

## 1.162.1
2021-12-14

### Fixes

- **nova-1165:** added cors for novatalent.com (0016e068c801e1c4fdf7084284140603c3b7989f)

## 1.162.0
2021-12-14

### Features

- **nova-1165:** added endpoint to get magic link for user (8e6721422ce3198046830c8516a843ccf53eb0e2)

## 1.161.2
2021-12-14

### Fixes

- **nova-1165:** dummy deploy to add production logs (b5fd7be3c325433e6018d73901aa93e2edab82d3)

## 1.161.1
2021-12-13

### Fixes

- **nova-1165:** send country to reference email (cdf586c72ecf8301c568f45673776d1fef763903)

## 1.161.0
2021-12-13

### Features

- **nova-1165:** minor changes to allow killing php (ac96c1213ecb3516b464e6ce331d76f676c6292b)

## 1.160.0
2021-12-10

### Features

- **nova-1366:** fix wrong review score update (4b6e05162bce8639b0d3df045992628684ed9085)

## 1.159.0
2021-12-10

### Features

- **nova-1381:** change vertical name (2f218415c8e304cdce19eab452253fd100bf1a24)

## 1.158.0
2021-12-09

### Features

- **nova-1270:** add endpoint to update and delete application skills (e81540c012628f3163fb5a0db39d0f9070be4e45)

## 1.157.1
2021-12-07

### Fixes

- **nova-1245:** update status to move dropped outs (04e57aa76a81966ee34b864a3db8a38e02e77670)

## 1.157.0
2021-12-07

### Features

- **nova-1126:** steps depend on process + vertical (23c16f1c83352cf758293c4aa970fbc1c3e6db00)

## 1.156.0
2021-12-03

### Features

- **nova-1299:** allow change of market from logged users endpoint (c6b05470990b59e6e48168802e76be39774b6d22)

## 1.155.0
2021-12-02

### Features

- **nova-1123:** add skills step (dcc46dacc879a226cf945c4d7d2a423e9be93718)

## 1.154.0
2021-12-02

### Features

- **nova-1295:** added forefront configuration (9457ebdd56e60f4057bf8b44c47022bb15d13cd8)

## 1.153.0
2021-12-02

### Features

- **nova-1245:** fix bulk move (a42dd0e16006a2a37e46bf06fde40a816f83047a)

## 1.152.1
2021-12-01

### Fixes

- **nova-1359:** fixed nominators report (32713c7073613d01b8b9a2ab05ae40bcb6f2d546)

## 1.152.0
2021-12-01

### Features

- **nova-1289:** added endpoint for private nominations (bc76d3afcfa63e37833ab25021fc3e6b727f87af)

## 1.151.0
2021-12-01

### Features

- **nova-1220:** added application skills endpoints (940a705133e68986834a7f156c4d8cb8379ecad4)

## 1.150.1
2021-11-30

### Fixes

- **nova-1345:** fix verticals in back (4db883cfd0950eb800c37cf98f1921dd58dd52ff)

## 1.150.0
2021-11-30

### Features

- **nova-1353:** added skill proficiency taxonomy (eda466e9a78d7a883c22ab9e2236ac79d1502f80)

## 1.149.1
2021-11-29

### Fixes

- **nova-1289:** added new endpoint for rename (31fe4d94e32b55ec6d73f41f4e7223d9ed0a7bc9)

## 1.149.0
2021-11-25

### Features

- **nova-1295:** added process filter to reports (6e6ae1868b9dfe004d877e9cdd218e1223d829f9)

## 1.148.0
2021-11-25

### Features

- **nova-1306:** added serializer for errors (3fb4bbc26e1f0351987b8feb4be52129aa099354)

## 1.147.1
2021-11-23

### Fixes

- **nova-1269:** fixed bug where isStudent was not being set (5064532089883e70e9b9f8a9edac8bbd902d2015)

## 1.147.0
2021-11-19

### Features

- **nova-1225:** make verticals endpoint public (af56f8828388b5b6ef3daaf3ab7b96f70bd06b0f)

## 1.146.0
2021-11-19

### Features

- **nova-1225:** store verticals in backend (e9aec0b5f60a53eca9916638ef34b93e7fa7e41d)

## 1.145.2
2021-11-18

### Fixes

- **nova-1183:** modify concrete hours to get the funnnel report (df072266af59f0b2ae80f8087db1613722b65a39)

## 1.145.1
2021-11-18

### Fixes

- **nova-1269:** handle undefined education end date and nominator name (f3af5ffab206b64196b1dc3f27ad7a434be33a71)

## 1.145.0
2021-11-18

### Features

- **nova:** fix error log in nomination controller (a3e0a201b6b85c9da740b82682f7d82ae2f0b4dd)

## 1.144.4
2021-11-15

### Fixes

- **nova-1284:** add split by ; instead , (bbad537611c3b3ee2bf575c1fc8e2aadadaade01)

## 1.144.3
2021-11-12

### Fixes

- **nova-1219:** remove fields from required (fa1c60d2418a6e0e1e2d579e78a479aab99b3750)

## 1.144.2
2021-11-12

### Fixes

- **nova-1183:** add concrete hours to get the funnnel report (28a1bfcbab98e721a18989ee3b7274a46700da46)

## 1.144.1
2021-11-11

### Fixes

- **nova-1274:** get name from talent if user has not name (4fe57d2ed7a72231183a7db6aa65a2ca54c186fa)

## 1.144.0
2021-11-11

### Features

- **nova-1197:** remove seniority and had managment training fields from required (e9d05f2afb8cfa5442f616c977072303aec891c6)

## 1.143.0
2021-11-10

### Features

- **nova-1272:** add source emails also from nova111 (57283216b7e92dc85faed3417207c5f877ae1c23)

## 1.142.1
2021-11-08

### Fixes

- **nova-1181:** order by name if taxonomy  is role (2c4bd24d819b0bda532560464e1cb6ca95eb9ff6)

## 1.142.0
2021-11-05

### Features

- **nova-1181:** add order by name if taxonomie has it (6e885506882af2bad6b93ff7cd80de44f506cde6)

## 1.141.1
2021-11-04

### Fixes

- **nova-1215:** modify get answered questions url (93610efaae1ab3406f774147d3b2bac82962aae6)

## 1.141.0
2021-11-02

### Features

- **nova-1214:** added linkedin to update fields (6461792ab2f8dc626d82b8c2c5b9ef91a3dc4dc8)

## 1.140.0
2021-10-29

### Features

- **nova-923:** added enpoint to logout (0eb430979e836a44a5f1f14d1c5b4168c0806304)

## 1.139.0
2021-10-29

### Features

- **nova-1107:** reset iq tests and bug fixes (e33fc0aa04e41a70b5adb0d3acdae496f7704006)

## 1.138.1
2021-10-29

### Fixes

- **nova-1210:** fix backend auth for php (b07c85231dec943ce9e2e19ae684aa34af7e5d24)

## 1.138.0
2021-10-28

### Features

- **nova-1196:** add endpoint to create logged references (3da229866ec45f5d70387bd6a9cf86072db993e8)

## 1.137.2
2021-10-28

### Fixes

- **nova-921:** set createdAt timestamp before creating references (0e6a77343c170b6680d8739a191a93016579ba77)

## 1.137.1
2021-10-27

### Fixes

- **nova-828:** refactor reminder rules (7200f8c6cca117ba1f8711d1098b257c695eb0c1)

## 1.137.0
2021-10-26

### Features

- **nova-826:** update logic to use table communication sent instead reference_reminder (fcbf887e10d8236b428d0012b5b68e0dea5a4671)

## 1.136.0
2021-10-26

### Features

- **nova-1066:** added nova 111 students constraints (78b887e622154841def4624179b88a6ac18ae651)

## 1.135.0
2021-10-25

### Features

- **nova-1072:** added filters for majors and fixed error when updating app (faaa8475db7eb1db5868bf8dab91e93e293a419c)

## 1.134.0
2021-10-25

### Features

- **nova-1156:** implement presentation milestone endpoints (db3a3c83177fce69580a1eadcd95385e701ae28f)

## 1.133.2
2021-10-22

### Fixes

- fixed removed endpoints (a09f6ab1f30ad811e3509d5af71b2ab4598929cd)
- **nova-1062:** added missing endpoints (e01cf0da28d8f97ede8950344bb6589b43b9c8d7)

## 1.133.1
2021-10-22

### Fixes

- **nova-1062:** fix url template (4fade38c34fe74a51b12d17015cd5f3e63a83506)

## 1.133.0
2021-10-22

### Features

- **nova-1062:** references now depends on application (2a7a8345f421fbdc728657d5d3edfe947b8c4882)

## 1.132.0
2021-10-21

### Features

- **nova-1108:** removed security for vouch endpoints (b644c101e091a92277e48f92314dd64fa491aaec)

## 1.131.1
2021-10-21

### Fixes

- **nova-1072:** add suggested verticals to /me/applications endpoint (7beb626a5db90769cbf04293965d648202fab188)

## 1.131.0
2021-10-20

### Features

- **nova-1055:** add endpoints to get iq test anserwed (6a956f75fcc22200ba89018690becd897bb7b043)

## 1.130.2
2021-10-20

### Fixes

- **nova-1099:** fixed errors with password reset (25202f75d3a982de531fddb0d48f9abd4124a6cf)

## 1.130.1
2021-10-20

### Fixes

- **nova-1072:** add check education application step (7a39ec9398646ecbd764625b5ff7d47a366189a3)

## 1.130.0
2021-10-18

### Features

- **nova-774:** add acceptedUseInfoForMatching property to talent update endpoints (df3944a0553d298c104fa14d031c145f6706e65c)

## 1.129.0
2021-10-18

### Features

- **nova-933:** add endpoints me for radar users (7ffe8f1cce1b86ad321e02e9968141d518064003)

## 1.128.0
2021-10-14

### Features

- **nova-774:** update talent patch to allow terms and conditions (be3c92e7aef311d16bcee9d7cf130717bdd48449)

## 1.127.0
2021-10-11

### Features

- **nova-1041:** added endpoint to retrieve application steps status (1292fb2ca4f0ed4fdc0632dfb7ea51cfbe2238dc)

## 1.126.0
2021-10-08

### Features

- **nova-1075:** get talent city taxonomy (eb119415f3da751fcf0082a7f181b0bc2d3345e2)

## 1.125.0
2021-10-08

### Features

- **nova-952:** add endpoints to request and reset password (2103f0ebfd86297f2c164750693c9eef832ecaaa)

## 1.124.0
2021-10-08

### Features

- **nova-415:** finish nominee reports (1a4f200d8afd11228a8f53a267e025561a0b2b62)

## 1.123.0
2021-10-07

### Features

- **nova-953:** handle reminders with rules (305d6f2512977712c35579162ab1f52928712741)

## 1.122.0
2021-10-04

### Features

- **nova-415:** retrieve also nominations with no nominee market (d0b3514feca71a3a80725221e94ef2b248eed08f)

## 1.121.0
2021-09-30

### Features

- **nova-937:** added process type to some endpoints (080b53d7e33d6c1a1617ae289a488c46805e5be3)

## 1.120.0
2021-09-30

### Features

- **nova-415:** implement nominees reports (2cbd2d6a0c4d614e12be77fe7ce9dd2919735e82)

## 1.119.0
2021-09-29

### Features

- **nova-805:** add endoints to update application email (afd9cd8ba398044cf8ec807ef9ad5aef11bc9d8d)

## 1.118.1
2021-09-29

### Fixes

- **nova-1091:** fix automatic review creation (6d0dc1864df5b65b1602ccac80be43bdee7444da)

## 1.118.0
2021-09-28

### Features

- **nova-878:** added open nominations endpoints (3ecaaf919126611f796586816a6f02a5fb4b19e8)

## 1.117.1
2021-09-23

### Fixes

- **nova-957:** fix application schema validator (8ef1866b334b60743ccefd240d3f872b46c2ead2)

## 1.117.0
2021-09-23

### Features

- **nova-905:** start handling pre screening stage (326e335481c6dbc71dfd73fc13ba451338045be7)

## 1.116.1
2021-09-22

### Fixes

- **nova-931:** fix parameters in method after create new test (a697847928bebe17ac616dfcd8c0fb695b3a5b34)

## 1.116.0
2021-09-22

### Features

- **nova-910:** handle video interviews (a590c26fdb941b04821512b190eb53206a1e7e23)

## 1.115.0
2021-09-20

### Features

- **nova-931:** add endpoint to manage tdl iq tests (7da673826ee114048e8fc95700ac1aa369e00263)

## 1.114.0
2021-09-20

### Features

- **nova-950:** change source for all emails except for onboarding emails (959aa87d41dff376c65cefddc3cb9574f34d922b)

## 1.113.0
2021-09-16

### Features

- **nova-830:** nominations depend on process type (1f6fead266b41e09eb522e6694963d475f7a66a5)

## 1.112.0
2021-09-14

### Features

- **nova-883:** added missing endpoint for radar users (231e80674ae0f4f4a5e14e3c9f3328e6cd839aff)

## 1.111.1
2021-09-13

### Fixes

- **nova-909:** change todo to rethink action logs refactor (b39388f07368dd90d9be14e5f8917b9a521096bb)

## 1.111.0
2021-09-13

### Features

- **nova-906:** allow for different acceptance actions depending on process (eeb1618fa951432bb867347d39ba23593005297e)

## 1.110.0
2021-09-13

### Features

- **nova-902:** set application steps depending on process type (1832b0821f14ab4ecfdcc76febdd6ea5e8c07a44)

## 1.109.0
2021-09-09

### Features

- **nova-503:** added sync with hivebrite experiences and educations (f8ba2d1dc0b4e2bcd9424715e2212f97ec60d446)

## 1.108.0
2021-09-09

### Features

- **nova-911:** enabled talent auth (019be18122266ca1bea2dff5f47e526bb3b6557f)

## 1.107.0
2021-09-09

### Features

- **nova-759:** implemented new scoring model (7f6cf549d93ddf403f4de5921ddc643cf35bd812)

## 1.106.3
2021-09-08

### Fixes

- **nova-881:** refactor in automatic onboarding (c51fa3cbe4113243af731f1e8eb4a80ba302499e)

## 1.106.2
2021-08-26

### Fixes

- **nova-895:** fixed applications order by updated date (a172e22404c0149ca7ecdc1ce9f34bcdf72264e2)

## 1.106.1
2021-08-26

### Fixes

- **nova-853:** fixed bug in nominator score (ccd65ba9380526cbd8e272d4db91ca57256e12c2)

## 1.106.0
2021-08-26

### Features

- **nova-821:** added start and end variables for each process (60ac0731dd3747ad848a3b10f09cc49aaaa85714)

## 1.105.2
2021-08-26

### Fixes

- **nova-914:** fixed yobs auth (3ab7488fc60aad2dfeb845ab77ce29225321db40)

## 1.105.1
2021-08-25

### Fixes

- **nova-914:** return empty nominations if not present (a8139cb7d89dc9c5b8383eded482d70364647111)

## 1.105.0
2021-08-25

### Features

- **nova-840:** nomination approval depends on a config variable (2c671f7e01dcbf4478fa380e3a113594bc5e6711)

## 1.104.0
2021-08-25

### Features

- **nova-841:** add verticals to nomination and application (3c6265e5349c58b5e0437496d22ba4ce12d6419c)

## 1.103.0
2021-08-24

### Features

- **nova-816:** added processType field to nominations and applications (8aa72711a0456afc7dabcce84c55307edacab949)

## 1.102.0
2021-08-24

### Features

- **nova-818:** add method to set application deadline for process (60f379a521b160fc9d0ce2f27fec1da8651de560)

## 1.101.0
2021-08-23

### Features

- **nova-816:** added processType field to nominations and applications (98e18683b10a411e66c6e886b8e2a8b5a3655c98)

## 1.100.1
2021-08-23

### Fixes

- **nova-757:** fix get communication by application id (9b66fda14ba936b23f0a190aa483844291cf644e)

## 1.100.0
2021-08-23

### Features

- **nova-883:** return countries with city taxonomy (dcb3fcc414c8d06b99f37d50aedf08f3622ecdf3)

## 1.99.0
2021-08-19

### Features

- **nova-265:** modify logic to allow the reviewers see candidates from all... (8ab71a7d9a9319316747f36f70c2a2ff5103aa79)

## 1.98.0
2021-08-19

### Features

- **nova-844:** added auth to api (8146cea6ee66442217444d229ef5cda60d457e16)

## 1.97.3
2021-08-18

### Fixes

- **nova-757:** refactor communication sent (ccdd30f5f57e115c2ed518e6802d6ae66ad6347c)

## 1.97.2
2021-08-17

### Fixes

- **nova-757:** add exception date to send onboarding emails (45467001fe91bc022d4cedfb6de055d6bd9249e7)

## 1.97.1
2021-08-17

### Fixes

- **nova-757:** fixed hb error response (fac36eaa6e724d71e55117e057212d0c4798d899)

## 1.97.0
2021-08-17

### Features

- **nova-808:** Added search by email to Intercom adapter (0bde05d3888dc0e3f1b86b0a656b6e9062a42ee7)

## 1.96.0
2021-08-17

### Features

- **nova-757:** add endpoints to get talents and HB events (315ed738b5701eaaa2618042224803419dcfb93a)

## 1.95.2
2021-08-13

### Fixes

- **nova-xx:** fix query to get last dropped out (421613da98df9e6521bf30ec02b96342c82371f8)

## 1.95.1
2021-08-05

### Fixes

- **nova-log:** added log to check error (67460ddbc098e679e2d440a978c6bb0eb9b96e48)

## 1.95.0
2021-08-04

### Features

- **nova-721:** added missing required data for applications page (a9b23865df358f991979e5123fcbdd4f55d36d0a)

## 1.94.0
2021-08-02

### Features

- **nova-792:** added break lines to rejection feedback on email (6940cad241d623d4150fcbf26346a296e781d4af)

## 1.93.2
2021-07-30

### Fixes

- **nova-807:** add template email for references step (f351c867b03b8134a2d4310e32517a292f85ba7c)

## 1.93.1
2021-07-29

### Fixes

- **nova-466:** add condition to split (192f7c18b40a423701fef5d86198d88111df165e)

## 1.93.0
2021-07-29

### Features

- **nova-466:** implement interests & industry networks in radar (8de089b1b99da84167078bc25bc05c5db7d63e16)

## 1.92.1
2021-07-28

### Fixes

- **nova-783:** add missing score in response (2b8eedb7de6065156c71b56d5e9403e92ba537c8)

## 1.92.0
2021-07-27

### Features

- **nova-783:** added score to Role taxonomy (e182046cefe2701b5ac0d7e995ec55386ed94345)

## 1.91.1
2021-07-19

### Fixes

- **nova-743:** change typo in enum name (f60056eab1dab33fd0443c4ff34be61ea8de7bc2)

## 1.91.0
2021-07-19

### Features

- **nova-743:** add ednpoint to update review rejection feedback (cd4dabac3ce51713a9db463141c085482d6f173e)

## 1.90.0
2021-07-15

### Features

- **nova-755:** handle yobs auth (d2be3fad1963b9ac79e7c280e39d1fb2c17936cd)

## 1.89.2
2021-07-12

### Fixes

- **nova-714:** remove relations from applications because it get the talent... (32c6c5033376af6e48fd7b59e453138af91489d4)

## 1.89.1
2021-07-12

### Fixes

- **nova-632:** add set time to funnel report (4cc1281899ad4628b7e65d464e078252f3eb7d32)

## 1.89.0
2021-07-12

### Features

- **nova-714:** return application in nomination endpoint when available (b72c1f2b5429e2d1cfd3e38e61cc8e3a0b23e20a)

## 1.88.1
2021-07-09

### Fixes

- **nova-732:** fix issues when accepting candidates without nominators (f78ecd094a472fcd4c0a0d6eee8923c9f07344d4)

## 1.88.0
2021-07-07

### Features

- **nova-714:** add get and patch for available nominations (0c8a223215c35e1efc51d9b0aa3a273e81bd9fba)

## 1.87.2
2021-07-07

### Fixes

- **nova-734:** add check to not create new review if review already exists (4e5b3791ed555b30075387274b6d35fcdfb5c68d)

## 1.87.1
2021-07-05

### Fixes

- **nova-712:** add pagination to get all admins (e30b1b2f416e9ee5dea5c2502e3efd51917d6a74)

## 1.87.0
2021-07-05

### Features

- **nova-726:** added endpoint to send email and retry personality assessment (aefe9a71d81e523ad3dd10baa6127ea7e118132a)

## 1.86.1
2021-07-05

### Fixes

- **nova-645:** add delay to fix API throttle limitations (21382f3e5c1ae9e5f8369cbf1f7673374cbecbf9)

## 1.86.0
2021-07-05

### Features

- **nova-637:** generate and export yobs report (5f02f1124b65cff5da4b4e2147a83f8c9e972b76)

## 1.85.0
2021-07-02

### Features

- **nova-551:** add references scores (4b6c50b88685ebe94cdc33466a23fdf5f7553c1f)

## 1.84.0
2021-06-29

### Features

- **nova-712:** add order to get admins (b013103f568494c7284bef0e76988ea6a65689bb)

## 1.83.2
2021-06-25

### Fixes

- **nova-732:** now for real (4dcd4c4d3eb5061ad1cba43deaf73bb44e55f02b)

## 1.83.1
2021-06-24

### Fixes

- **nova-732:** fixed error with nominators with no nominations (501ce5bd29f20f51f338709b4028c564cbd726e1)

## 1.83.0
2021-06-24

### Features

- **nova-381:** added endpoints for videos and logs (5070f14ed314a281ddd80ecbb7d3e2b56a2e473a)

## 1.82.1
2021-06-21

### Fixes

- **nova-657:** updated talent report response (0c598e51af22575590df831ad6f03cb618044759)

## 1.82.0
2021-06-21

### Features

- **nova-657:** add endoint to get workload repo (131d2cedeb981ba506e7c6ed4b79782a0f9d40f1)

## 1.81.0
2021-06-18

### Features

- **nova-511:** report missing users in nas (9e708417396f8f384936bdeaab2c97f2f339adde)

## 1.80.0
2021-06-17

### Features

- **nova-653:** add new pending feedback state (fbe41a5d5d9098d1ba7d3bdc89ce9d2d321d32db)

## 1.79.0
2021-06-15

### Features

- **nova-695:** all emails are in lowercase (31aa521ece7ca2907b259b330e768a82cc56461d)

## 1.78.0
2021-06-15

### Features

- **nova-662:** transitions assessed y new status (523565a6cfe38a1189e4de63c4862f76f1c887e2)

## 1.77.3
2021-06-14

### Fixes

- **nova-709:** add rejection feedback to rejected email (e1ab1835a2b23b7f6dd9e18e3d5903b4ef77a467)

## 1.77.2
2021-06-11

### Fixes

- **nova-684:** allow for empty messages and comment (9ff303a3e536d21dfc98644836bcd518061a2d4b)

## 1.77.1
2021-06-11

### Fixes

- **nova-707:** create magic link on user acceptance (df253204253ea8a8f6691f764c6362def6f5440f)

## 1.77.0
2021-06-11

### Features

- **nova-684:** admin nominations dont go through proposed state (5e09248d98ab307cdf3f6c4470fe64a7b65bf27e)

## 1.76.0
2021-06-10

### Features

- **nova-663:** add to accept nomination the extra nomination and sync talent (87ffa6a11e0389b26333a66d7ef20297457fdf82)

## 1.75.1
2021-06-09

### Fixes

- **nova-702:** return market id for talent and allow to edit market for an user (ac13940077799dc8620ad411613ee53b657732a3)

## 1.75.0
2021-06-09

### Features

- **nova-379:** added assessment endpoints and much more (3161f1a3d665165dde2c0b22137cef11aca38f20)

## 1.74.1
2021-06-08

### Fixes

- **nova-699:** fixed race condition of promise all (692cb263a268b3af82b712108ebcd3760811bdb7)

## 1.74.0
2021-06-08

### Features

- **nova-636:** add yobs functionality (3d093456cd1f3d54eac298485473d1c7415cbde1)

## 1.73.0
2021-06-07

### Features

- **nova-659:** handle talent files (eed8d6cedf943eb10663162ff66c4e02f0141a9b)

## 1.72.0
2021-06-04

### Features

- **nova-365:** migrated bulk nominations endpoint (67105117bfcab8bdb2658ac185e177a6bfb62079)

## 1.71.0
2021-06-04

### Features

- **nova-372:** add cron to update available nominations (28199fd8837a8ff1d3d189522bccaa15092a6bf7)

## 1.70.0
2021-06-04

### Features

- **nova-611:** added more fields to patch reference endpoint (379f0d090a3035223db0520a37adb662196b5c84)

## 1.69.0
2021-05-31

### Features

- **nova-375:** add endpoint to update talent information (7431e292e93bf823224f917ee955bc727a4bb6af)

## 1.68.1
2021-05-28

### Fixes

- **nova-482:** fix for academic field (eaf756720032541b23fbd60d530f0fdf5ed065f5)

## 1.68.0
2021-05-28

### Features

- **nova-369:** add endpoint to update nominators (10805f2960380a936b00fafadbad369383601800)

## 1.67.0
2021-05-28

### Features

- **nova-363:** add endpoint to delete video interview (0c7b95b1a6497b79c5f7267a6d65ea3b3888871c)

## 1.66.0
2021-05-28

### Features

- **nova-627:** add endpoint to get talent languages (845612d3478a813790b3dccc80d73f2e548d7cab)

## 1.65.0
2021-05-27

### Features

- **nova-574:** add cron to obfuscate nomination discarded (b280ad09d61abec23e5685deb8240abc02214e85)

## 1.64.1
2021-05-27

### Fixes

- **nova-528:** update nomination with nominee id on acceptance (b370ba72c63e5e43536c6b8c4c5d828846677cd9)

## 1.64.0
2021-05-25

### Features

- **nova-528:** modified nominations process for linkedin check (06c5fdf85cda03cc1bab6fb37244304543076e06)

## 1.63.0
2021-05-19

### Features

- **nova-605:** add endpoints to get application by id and also by talent id (c8b2daa9cd91e678f13db9b14f689bca13d74c90)

## 1.62.1
2021-05-17

### Fixes

- **nova-526:** fix query (9f1161265d29e393825cf2a391bc1e1f535ec0ad)

## 1.62.0
2021-05-17

### Features

- **nova-526:** add new fields to nominator domain (711db71bbf134c36c11648b640d2e019f182c41e)

## 1.61.1
2021-05-14

### Fixes

- **nova-508:** minor fixes to improve our sync process (3acf46fc0c4668d5cd9171bc728aeff616ead479)

## 1.61.0
2021-05-14

### Features

- **nova-505:** handle hivebrite webhooks for user update (39d1843210803f8dcbec1d651482334ca46da56c)

## 1.60.0
2021-05-14

### Features

- **nova-508:** update ic user in sync (bf21d8b3a21a0a97be6c59b6ab1c4b7efba639a2)

## 1.59.0
2021-05-13

### Features

- **nova-525:** remove custom attributes from intercom user (64133935f23abf619393a153a1e3d64aef115e70)

## 1.58.0
2021-05-12

### Features

- **nova-510:** update create and delete companies in hb from nas (faa1d43f23d5fe87a8a8b649269a31ec09c5b334)

## 1.57.0
2021-05-12

### Features

- **nova-591:** add endpoint to get review (83b92d818adffc3c141df6d05531dcc62801a624)

## 1.56.1
2021-05-11

### Fixes

- **nova-359-fix:** add null to restore review if does not have reviewerId (773782a052ea65c787dfe3c1eb1378edc3757458)

## 1.56.0
2021-05-11

### Features

- **nova-359:** add endpoint to create reviews (156f359874dbac682c71ec8f5fddebe762981e58)

## 1.55.0
2021-05-10

### Features

- **nova-360:** add endpoint to create review notes (df75ce109141a193c0e42e311f3c63e12a5d2137)

## 1.54.0
2021-05-07

### Features

- **nova-358:** add endpoint to get steps (f27c61d04558616f8319637643c2e0973d35be21)

## 1.53.0
2021-05-06

### Features

- **nova-524:** added new way to send dates to hb (6a3a48534cb86addb379a1eb451cba807a572da9)

## 1.52.0
2021-05-05

### Features

- **nova-561:** add application id to get users (70edf8e1756cb3bd269af188d08d9ec977e87d47)

## 1.51.0
2021-05-04

### Features

- **nova-524:** fixed currently works (af20eb74df5e087dac7d5afb723924a123badd93)

## 1.50.0
2021-04-26

### Features

- **nova-524:** added university field (81e9a1db2e45ee0cb9872cbebfd6e095da2e98d2)

## 1.49.2
2021-04-22

### Fixes

- **nova-364:** fixed deadline date format (3f1b78af913b556cc8f7f9cce94fc4502074fc1a)

## 1.49.1
2021-04-21

### Fixes

- **nova-522:** delete user reminders when deadline is changed (6a8db636425ced5d4a8af74c3f17c0456dc14e61)

## 1.49.0
2021-04-21

### Features

- **nova-364:** added POST endpoint to create nominations (222b8dcd5ffba6f97b3e21ae89f090b9ac08ca2f)

## 1.48.0
2021-04-19

### Features

- **nova-490:** remove grade point average from HB sync (8397766a8ccd1cd0e4c4460f1baae534692c984c)

## 1.47.1
2021-04-16

### Fixes

- **nova-513:** handle gracefuly when no tdl scores are present (e3c70bc940594d41f3855d57be636b81979e9315)

## 1.47.0
2021-04-15

### Features

- **nova-478:** send roles to hivebrite (fe919e635b9e1f568262836202782bbbe3c34dbd)

## 1.46.2
2021-04-15

### Fixes

- **nova-499:** fixed auto score calculation (b70fa290a838fd541ee50edffabcd258ddd6fd11)

## 1.46.1
2021-04-15

### Fixes

- **nova-499:** error setting scores when there's more than one review (42d801a13dd2551092ff8e34d784caf2c00ede6a)

## 1.46.0
2021-04-14

### Features

- **nova-362:** add endpoint to update review (bfba7433c8a1f45368fb99c97cc3ea49b22a2049)

## 1.45.3
2021-04-13

### Fixes

- **nova-495:** fixed query (fdaa3af1d2820128f014c7a2a3fdf0983c0bec32)

## 1.45.2
2021-04-13

### Fixes

- **nova-495:** fix query to send second reminder (0aae101174913cdf62d01508054e5d3cdaf9574e)

## 1.45.1
2021-04-13

### Fixes

- **nova-357-fix:** remove magic link from user domain (234a247f90831821ee756f56cb8e7405b6a8503c)

## 1.45.0
2021-04-12

### Features

- **nova-370:** add endpoints to create and delete markets (7b4f84ee3a02a1e66b661f488d0e8c87cecbc6d2)

## 1.44.0
2021-04-12

### Features

- **nova-357:** add endpoint to update application (96b9fa5e72f3c6c86ad3f7d7ecc3195615aa5b64)

## 1.43.0
2021-04-09

### Features

- **nova-474:** change full name for first name in nominator reminder dropped out (e4b7ccae224048fe5b75d9c8b1e15212b978f688)

## 1.42.0
2021-04-08

### Features

- **nova-459:** add degrees in new double select format (7eb3f1ced8d26f0f1299482969fd937d80db42b8)

## 1.41.2
2021-04-07

### Fixes

- **nova-xx-fixes:** refactor check application deadline test in smaller test (a83a1f954947b72a7abe365581d9acd3ed1a094b)

## 1.41.1
2021-04-05

### Fixes

- **nova-472:** fixed typo when reassigning educations (2653b20451f715a6c3991507d0cd806d61f9b977)

## 1.41.0
2021-03-30

### Features

- **nova-366:** added admin crud (59ce9ea67d13cda906e0bd84f3f2be138c2730a1)

## 1.40.2
2021-03-29

### Fixes

- **nova-465:** write action logs when sending emails (78997e303d12b469472b81b039ccab301e0b87e0)

## 1.40.1
2021-03-29

### Fixes

- **nova-442:** used new membership api to improve performance (b29c775a1b8176d959ede54b012209b2c59a43b0)

## 1.40.0
2021-03-26

### Features

- **nova-441:** add handler for intercom events (fce9c552473888d4ee47fc63346fca0f704e3187)

## 1.39.0
2021-03-26

### Features

- **nova-442:** added usage data sync process (d1290fc0a621179d1530089a21f1a3b26715cf11)

## 1.38.1
2021-03-23

### Fixes

- **nova-440:** fix import in builder (a8de55b9431df5d112e2896feebaa71d08b0a917)

## 1.38.0
2021-03-23

### Features

- **nova-440:** add endpoint to store provider events in our database (0585de66a506f95f3a50de6b861d5bd26223f7dd)

## 1.37.1
2021-03-15

### Fixes

- **nova-361:** fixed query for score inserts (30cc64df585eb909b11667feeb099d118f3c80fe)

## 1.37.0
2021-03-15

### Features

- **nova-361:** added put for review scores (168e0578ef8cd6e4895c72b6d566f80f7c9736d6)

## 1.36.0
2021-03-15

### Features

- **nova-354:** implement to all taxonomies name searcheable (85770442756c6ff148dc0a9d6515fc3dfabbefc7)

## 1.35.0
2021-03-11

### Features

- **nova-414:** add endpoint to get nominators report (d3fc7fac3b286a96e5896210d9fbfc256005324c)

## 1.34.0
2021-03-08

### Features

- **nova-211:** added funnel report functionality (3691410196c6c8057c7e7a947bfb34fe78a474e3)

## 1.33.4
2021-03-03

### Fixes

- **nova-371:** fixed issue with the query (70328ee8ed2ea87be76ee6d848e204279c8e5964)

## 1.33.3
2021-03-02

### Fixes

- **nova-371:** modify for of instead promise all to fix rate exceded when get the templates (c23305250796a902fdd598f940a482b717e7a427)

## 1.33.2
2021-03-02

### Fixes

- **nova-402:** fixed issue with roles (54fa3aac74749308a89bd78869ad11bb9f82de0a)

## 1.33.1
2021-03-02

### Fixes

- **nova-402:** fixed candidate creation model (eedbb683bc224df8c9f5a0311fff29dd97db940a)

## 1.33.0
2021-03-02

### Features

- **nova-397:** obfuscate user PII instead delete it (ec193718960167e1d045ef272645ca09578db66c)

## 1.32.0
2021-03-02

### Features

- **nova-402:** create users in hb and intercom from node (e21a9ab78a0ece6df3e60bad4ac348feb1340ecf)

## 1.31.0
2021-03-01

### Features

- **nova-306:** add endpoints to reassign companies and institutions (78efaf76cf51e084406b8cb25b003352ace7239b)

## 1.30.2
2021-03-01

### Fixes

- **nova-xx:** hotfix for talent birth_date (ec7a2a9962e6c941579d3e71606b76c7ffc6b991)

## 1.30.1
2021-02-26

### Fixes

- **nova-371:** add lut to get ses templates (a5424f84137b9969c4fc1d871ff2d32b8a42f86a)

## 1.30.0
2021-02-26

### Features

- **nova-402:** added new architecture paradigm for repos (85c25195784030275fe9bc40f585144369270823)

## 1.29.1
2021-02-22

### Fixes

- **nova-371:** change nominator email template (f397a2a54100a6ef1a05df0f218dd3f09c6774d6)

## 1.29.0
2021-02-22

### Features

- **nova-371:** add cron to check deadlines (6bdc6d18fcbc1126377741a529d861c9d6516862)

## 1.28.1
2021-02-19

### Fixes

- **nova-412:** allow for null majors (62013cf1551a6b16f0bfe92592d647f8e5d74ed2)

## 1.28.0
2021-02-18

### Features

- **nova-299:** add pagination and filters to taxonomies (36c797f6680cad58165b4c94dbe3ef3c6ecc60a9)

## 1.27.0
2021-02-11

### Features

- **nova-172:** changed to roles (43dada17a3f3734771e7066f7e811b8cee0f0ab1)

## 1.26.1
2021-02-10

### Fixes

- **nova-382:** add source to send reference emails (b12e24b38876a4233c66e242484770c2dc261f4e)

## 1.26.0
2021-02-09

### Features

- **nova-141:** small fixes for migration (31628dc9bb3c7cfdc4b4eab30c5624c86b505e13)

## 1.25.0
2021-02-05

### Features

- **nova-310:** handle company free inputs (a84f886638b6032bd6aeb4329eea394101170dd6)

## 1.24.1
2021-02-05

### Fixes

- **fix-nova-269:** remove default in endpoint definition (64e265b18996ce8a19a9b05cbb457e295fd41cb9)

## 1.24.0
2021-02-05

### Features

- **nova-269:** add endpoints to get application status by user types and count users by application status (82b39815a03cc91ebec6bab4f242c19cecb2a1f6)

## 1.23.0
2021-02-04

### Features

- **nova-182:** add cron to send automatic emails to dropped outs (3eb6ad65287a273e05913911a2ef8fd634733e4f)

## 1.22.0
2021-01-28

### Features

- **nova-140:** helper methods to migrate experience operations (b728fee5214d73de2a7f80979eb99cc2e19b893f)

## 1.21.0
2021-01-21

### Features

- **nova-127:** add endpoints to get users and markets (ced7f90d21e72c73a943ce4d0f3a35d0ae5b0f0f)

## 1.20.0
2021-01-18

### Features

- **nova-129:** added send email template endpoint (8521ebf5720497138c08399b4baac79b8484a9de)

## 1.19.0
2021-01-04

### Features

- **nova-189:** add enpoints to mange talent experiences (afbb6beecada8934789311ff2a707067d9f4868b)

## 1.18.0
2020-12-30

### Features

- **nova-235:** added healthchecks (a39044e531fb16f5e8f5490c491612fc240d749c)

## 1.17.0
2020-12-28

### Features

- **nova-190:** add endpoints to manage talent education (94127a063d77085e4fb21681a79ddf347b4692c3)

## 1.16.0
2020-12-17

### Features

- **nova-191:** Added usecase to calculate scores (c62d919d389676db284fed04745e8eb948966a4e)

## 1.15.0
2020-12-10

### Features

- **nova-174:** using SES templates instead of stripo (f3d41afc47fc163e1304d25548e7a43b8ef33124)

## 1.14.0
2020-12-10

### Features

- **nova-64:** delete non member from token (0a275b9207aab04d77ebdb3cf46b12170ae633c3)

## 1.13.1
2020-12-09

### Fixes

- **nova-154:** change email sender (11194fdc0ee8c224965408a8314991fa76963529)

## 1.13.0
2020-12-04

### Features

- **nova-165:** add endpoint to update users (ac469ed7d169163111eb0400ed9a89ef841b067a)

## 1.12.1
2020-12-02

### Fixes

- **nova-83:** expose port 8083 (a6f6c814a0123e7dcd61a2cda4680fbed11fe40c)

## 1.12.0
2020-11-28

### Features

- **nova-173:** Added LUT for email templates (bc80835b45d86691a0f733220817b0629b0f430a)

## 1.11.0
2020-11-24

### Features

- **nova-83:** add cors to server adapter (7cb534577585f9b1d116447b65259f55ef8a5fe4)

## 1.10.0
2020-11-19

### Features

- **nova-158:** add endpoint to expire references (fdc0f6aebb2508c743383461c4278ea2101d9b62)

## 1.9.0
2020-11-17

### Features

- **nova-148:** added retrieve talent endpoint (6ab404603217c4105461a372ffcca7e0365a2590)

## 1.8.0
2020-11-16

### Features

- **nova-149:** added missing taxonomies endpoints (b9785e6b78b5177cbd37768de5414d5513ad4c4f)

## 1.7.0
2020-11-16

### Features

- **nova-17:** taxonomies api (31ed1ed4ee6e1a643e2e27548d4484f421855233)

## 1.6.1
2020-11-10

### Fixes

- **nova-135:** fixed typo in connection type (9b99e3c94c424bd0c12be7cac816b5c6e971ae44)

## 1.6.0
2020-11-10

### Features

- **nova-111:** added stripo as email template provider (974d1640bfa6270473870db7340737165750f00f)

## 1.5.3
2020-11-04

### Fixes

- **nova-117:** remove spececial character from email subjects (dc262237ed4ef0ecb5314c0e9f0d90426198f57f)

## 1.5.2
2020-11-03

### Fixes

- **nova-33:** change source email in config (780211af6745d1647052523f0db66a2042fd4827)

## 1.5.1
2020-11-03

### Fixes

- **nova-105:** remove space lines and fix typo words (421c36d7fb0051d461010b97abe7a4e3406eff92)

## 1.5.0
2020-10-30

### Features

- **nova-36:** cron to send reminders (ef6bccfb206921ec62f4ed77e2ef43f29e1b4c29)

## 1.4.0
2020-10-29

### Features

- **nova-35:** add functionality to send mail automatically to referrers with reference requests (ea8cabf40d6cfb6689c4cef98eeb431a051a8ceb)

## 1.3.0
2020-10-27

### Features

- **nova-34:** add endpoints to get and update Reference (3a6adfe940094db638ff60c36c51a52be33c2329)

## 1.2.0
2020-10-26

### Features

- **nova-34:** add endpoint to create Reference (67fdf957cfcd9898833bba5061321feb558cb706)

## 1.1.5
2020-10-21

### Fixes

- **nova-xx:** handle error better (6eb772fa29aed8475fb11fa57cadef03d25b37a9)

## 1.1.4
2020-10-21

### Fixes

- **nova-xx:** hopefully last test (80df348af3b1c046ee828b704913fca94c7b0678)

## 1.1.3
2020-10-21

### Fixes

- **nova-xx:** testing (362ceab2b157aa2d7333733e3e038468791f7348)

## 1.1.2
2020-10-21

### Fixes

- **nova-xx:** keep testing (e146912639689fe16bfee8f7f96747d975823138)

## 1.1.1
2020-10-20

### Fixes

- **nova-xx:** Checking vars (dcf618c0aa07b873ff0cdc2ea8bcb5ca6e3b2359)

## 1.1.0
2020-10-20

### Features

- **nova-xx:** added health endpoint (5ced502de5ec48a2aea1bbb7f629a179130021ad)

## 1.0.1
2020-10-20

### Fixes

- **nova-xx:** testing deployment (14b7bab0fecd83dc6ed4d235424c665376ae7122)

## 1.0.0
2020-10-20

### Fixes

- **nova-xx:** Testing deployment (08f38dae11665f8b7a386dddabafba5dbb31aac6)
- **nova-xx:** Testing deployment (2496592c9e855d0281cb1c8e5e71d457149aef9e)