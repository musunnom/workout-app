import { useState, useEffect } from "react"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

function App() {
  const workoutPlan = {
    monday: [
      {
        name: "덤벨 스쿼트",
        reps: "15회",
        sets: 3,
        image:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      },
      {
        name: "플랭크",
        reps: "30초",
        sets: 3,
        image:
          "https://images.unsplash.com/photo-1518611012118-696072aa579a",
      },
    ],

    tuesday: [
      {
        name: "덤벨 로우",
        reps: "12회",
        sets: 3,
        image:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
      },
      {
        name: "숄더 프레스",
        reps: "12회",
        sets: 3,
        image:
          "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
      },
    ],

    wednesday: [
      {
        name: "루마니안 데드리프트",
        reps: "12회",
        sets: 3,
        image:
          "https://images.unsplash.com/photo-1517963879433-6ad2b056d712",
      },
      {
        name: "사이드 런지",
        reps: "15회",
        sets: 3,
        image:
          "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
      },
    ],

    thursday: [
      {
        name: "푸쉬업",
        reps: "15회",
        sets: 3,
        image:
          "https://images.unsplash.com/photo-1518611012118-696072aa579a",
      },
      {
        name: "덤벨 컬",
        reps: "12회",
        sets: 3,
        image:
          "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
      },
    ],

    friday: [
      {
        name: "덤벨 런지",
        reps: "15회",
        sets: 3,
        image:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      },
      {
        name: "플랭크",
        reps: "45초",
        sets: 3,
        image:
          "https://images.unsplash.com/photo-1518611012118-696072aa579a",
      },
    ],

    saturday: [
      {
        name: "버피 테스트",
        reps: "10회",
        sets: 3,
        image:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      },
      {
        name: "사이드 플랭크",
        reps: "30초",
        sets: 3,
        image:
          "https://images.unsplash.com/photo-1518611012118-696072aa579a",
      },
    ],
  }

  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ]

  const today = days[new Date().getDay()]

  const exercises = workoutPlan[today] || []

  const [doneList, setDoneList] = useState(() => {
    const saved = localStorage.getItem(today)

    return saved
      ? JSON.parse(saved)
      : exercises.map(exercise =>
          Array(exercise.sets).fill(false)
        )
  })

  const [restTime, setRestTime] = useState(0)

  const [weight, setWeight] = useState("")

  const [weightHistory, setWeightHistory] =
    useState(() => {
      const saved =
        localStorage.getItem("weightHistory")

      return saved ? JSON.parse(saved) : []
    })

  useEffect(() => {
    localStorage.setItem(
      today,
      JSON.stringify(doneList)
    )
  }, [doneList, today])

  useEffect(() => {
    localStorage.setItem(
      "weightHistory",
      JSON.stringify(weightHistory)
    )
  }, [weightHistory])

  useEffect(() => {
    if (restTime <= 0) {
      if (restTime === 0) {
        const audio = new Audio("/alarm.mp3")
        audio.play()
      }

      return
    }

    const timer = setTimeout(() => {
      setRestTime(restTime - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [restTime])

  const toggleSet = (exerciseIndex, setIndex) => {
    const newList = [...doneList]

    newList[exerciseIndex][setIndex] =
      !newList[exerciseIndex][setIndex]

    setDoneList(newList)

    setRestTime(45)
  }

  const saveWeight = () => {
    if (!weight) return

    const todayDate =
      new Date().toLocaleDateString()

    const newHistory = [
      {
        date: todayDate,
        weight: Number(weight),
      },
      ...weightHistory,
    ]

    setWeightHistory(newHistory)

    setWeight("")
  }

  const totalSets = exercises.reduce(
    (sum, exercise) => sum + exercise.sets,
    0
  )

  const completedSets =
    doneList.flat().filter(done => done).length

  const progress =
    totalSets > 0
      ? Math.round((completedSets / totalSets) * 100)
      : 0

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "20px",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h1>오늘의 운동</h1>

        <h2>{today.toUpperCase()}</h2>

        <p style={{ fontSize: "20px" }}>
          진행률: {progress}%
        </p>

        <div style={{ marginBottom: "30px" }}>
          <h3>오늘 몸무게</h3>

          <input
            type="number"
            placeholder="몸무게 입력"
            value={weight}
            onChange={(e) =>
              setWeight(e.target.value)
            }
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid gray",
              marginRight: "10px",
            }}
          />

          <button
            onClick={saveWeight}
            style={{
              padding: "10px 14px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "black",
              color: "white",
            }}
          >
            기록 저장
          </button>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h3>최근 몸무게 기록</h3>

          {weightHistory.map((item, index) => (
            <p key={index}>
              {item.date} : {item.weight}kg
            </p>
          ))}

          <div
            style={{
              width: "100%",
              height: "300px",
              marginTop: "30px",
            }}
          >
            <ResponsiveContainer>
              <LineChart data={weightHistory}>
                <XAxis dataKey="date" />

                <YAxis
                  domain={[
                    "dataMin - 1",
                    "dataMax + 1",
                  ]}
                />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="weight"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {restTime > 0 && (
          <div
            style={{
              backgroundColor: "#e5e7eb",
              padding: "15px",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          >
            <h2>쉬는시간: {restTime}초</h2>
          </div>
        )}

        {exercises.map((exercise, exerciseIndex) => (
          <div
            key={exerciseIndex}
            style={{
              background: "#ffffff",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "16px",
              border: "1px solid #d1d5db",
            }}
          >
            <img
              src={exercise.image}
              alt={exercise.name}
              style={{
                width: "100%",
                borderRadius: "12px",
                marginBottom: "10px",
              }}
            />

            <h2>{exercise.name}</h2>

            <p>
              {exercise.reps} × {exercise.sets}세트
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {doneList[exerciseIndex]?.map(
                (done, setIndex) => (
                  <button
                    key={setIndex}
                    onClick={() =>
                      toggleSet(
                        exerciseIndex,
                        setIndex
                      )
                    }
                    style={{
                      backgroundColor: done
                        ? "green"
                        : "black",
                      color: "white",
                      border: "none",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                  >
                    {done
                      ? `세트${setIndex + 1} 완료`
                      : `세트${setIndex + 1}`}
                  </button>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App