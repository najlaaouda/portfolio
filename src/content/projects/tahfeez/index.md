---
title: حلقات التحفيظ
summary: An Arabic-first app that runs a network of Quran memorisation centres, with one experience each for head office, centre supervisors, teachers and parents.
cover: /images/projects/tahfeez/cover.webp
brand: "#890909"
device: mobile
showcase:
  - /images/projects/tahfeez/daily-recitation.webp
  - /images/projects/tahfeez/attendance.webp
  - /images/projects/tahfeez/parent-home.webp
  - /images/projects/tahfeez/admin-home.webp
  - /images/projects/tahfeez/monthly-attendance.webp
  - /images/projects/tahfeez/circles.webp
year: 2023
role: UX/UI Designer
platform: Mobile app (iOS)
tags: [Mobile app, UX/UI, EdTech, RTL]
category: Apps
tools: [Figma]
featured: true
order: 8
draft: false
screens:
  - title: Sign in
    note: One app and one sign-in for every role. The account decides which home screen and navigation the person sees.
    images:
      - /images/projects/tahfeez/splash.webp
      - /images/projects/tahfeez/login.webp
  - title: Head office
    note: Totals across every country, each country's budget and centres on a chart and a map, then countries, their centres and the money sent to them.
    images:
      - /images/projects/tahfeez/admin-home.webp
      - /images/projects/tahfeez/countries.webp
      - /images/projects/tahfeez/country-centers.webp
      - /images/projects/tahfeez/transfers-report.webp
  - title: Adding and running a centre
    note: A new centre is added in three steps, from its details and bank account to its supervisor. A supervisor can't be removed without naming a replacement.
    images:
      - /images/projects/tahfeez/add-center.webp
      - /images/projects/tahfeez/add-center-2.webp
      - /images/projects/tahfeez/add-center-supervisor.webp
      - /images/projects/tahfeez/center-details.webp
      - /images/projects/tahfeez/replace-supervisor.webp
  - title: Centre supervisor
    note: Today's attendance and the centre's numbers up front, then its Quran circles, teachers and students, each one tap away.
    images:
      - /images/projects/tahfeez/supervisor-home.webp
      - /images/projects/tahfeez/circles.webp
      - /images/projects/tahfeez/circle-details.webp
      - /images/projects/tahfeez/add-circle.webp
      - /images/projects/tahfeez/more.webp
      - /images/projects/tahfeez/teacher-profile.webp
      - /images/projects/tahfeez/add-student.webp
  - title: Activities and events
    note: Supervisors publish courses and events with dates, audience and seats, and see who has registered.
    images:
      - /images/projects/tahfeez/events.webp
      - /images/projects/tahfeez/add-activity.webp
      - /images/projects/tahfeez/activity-details.webp
  - title: Teacher's attendance
    note: The whole circle is marked present in one switch, with the shift's start time filled in. The teacher only changes the students who were late, and adds a reason.
    images:
      - /images/projects/tahfeez/attendance.webp
      - /images/projects/tahfeez/attendance-marked.webp
      - /images/projects/tahfeez/students.webp
  - title: Recitation and reports
    note: For each student, the teacher records today's recitation and grade, sets the next passage to memorise, and follows the month's attendance and progress.
    images:
      - /images/projects/tahfeez/daily-recitation.webp
      - /images/projects/tahfeez/monthly-attendance.webp
      - /images/projects/tahfeez/monthly-recitation.webp
      - /images/projects/tahfeez/send-message.webp
      - /images/projects/tahfeez/account.webp
  - title: Parents
    note: Parents see each child's teacher and circle, their daily recitation or absence, and can rate the teacher, message the centre and sign up for activities.
    images:
      - /images/projects/tahfeez/parent-home.webp
      - /images/projects/tahfeez/child-daily.webp
      - /images/projects/tahfeez/child-absent.webp
      - /images/projects/tahfeez/rate-teacher.webp
      - /images/projects/tahfeez/center-activities.webp
      - /images/projects/tahfeez/register-activity.webp
      - /images/projects/tahfeez/notifications.webp
      - /images/projects/tahfeez/messages.webp
---

## Overview
Iqra wa Irtaqi ("read and rise") is an app for a network of Quran memorisation centres across several countries. Each centre has Quran circles: small groups of students, each with a teacher who listens to their recitation every day. I designed the app that runs this network as the UX/UI designer, in Arabic and right-to-left, for iOS.

## Four people, four apps in one
The same app serves four roles, and each one gets its own home screen and navigation:

- **Head office** follows every country and centre: budgets, money transfers and the best memorisers across the network
- **Centre supervisors** run one centre: its circles, teachers, students and activities
- **Teachers** take attendance and record each student's recitation
- **Parents** follow their children's progress and stay in touch with the centre

## The challenge
Each role cares about a different slice of the same data. A student's recitation is entered by a teacher, read by a parent, summarised for the supervisor and counted in head office totals. The app had to keep each person focused on their own job, while making sure what one person enters is exactly what the next person reads.

## Design decisions
**Navigation shaped by the role.** Head office gets Home, Countries, Reports and Settings. A teacher gets Attendance, Students, Messages and Account. Nobody has to dig past screens that belong to someone else.

**Attendance in one switch.** Most students arrive on time, so "everyone present" fills in the whole circle with the shift's start time. The teacher only changes the exceptions and adds a reason for lateness.

**Recitation in a few taps.** Memorising or reviewing, and the grade (excellent, very good, good, repeat) are chips rather than form fields. The last recitation sits at the top for context, and choosing the next passage, by surah and verse, closes the loop for tomorrow.

**One report, two lenses.** The monthly report switches between attendance and recitation. Totals come first, then a day-by-day table where late arrivals and early departures carry a note.

**Numbers before lists.** Every home screen opens on the few figures that role checks most, such as today's attendance, centres per country or the centre's budget, before any list.

**No centre without a supervisor.** Removing a supervisor asks for a replacement in the same flow, so a centre is never left without someone in charge.
