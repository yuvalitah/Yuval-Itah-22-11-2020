export const Autocomplete = {
  data: [
    {
      Version: 1,
      Key: "215837",
      Type: "City",
      Rank: 45,
      LocalizedName: "Herzliyya",
      Country: {
        ID: "IL",
        LocalizedName: "Israel",
      },
      AdministrativeArea: {
        ID: "TA",
        LocalizedName: "Tel Aviv",
      },
    },
    {
      Version: 1,
      Key: "174481",
      Type: "City",
      Rank: 53,
      LocalizedName: "Herzogenrath",
      Country: {
        ID: "DE",
        LocalizedName: "Germany",
      },
      AdministrativeArea: {
        ID: "NW",
        LocalizedName: "North Rhine-Westphalia",
      },
    },
    {
      Version: 1,
      Key: "167615",
      Type: "City",
      Rank: 63,
      LocalizedName: "Herzogenaurach",
      Country: {
        ID: "DE",
        LocalizedName: "Germany",
      },
      AdministrativeArea: {
        ID: "BY",
        LocalizedName: "Bavaria",
      },
    },
    {
      Version: 1,
      Key: "169873",
      Type: "City",
      Rank: 63,
      LocalizedName: "Herzberg am Harz",
      Country: {
        ID: "DE",
        LocalizedName: "Germany",
      },
      AdministrativeArea: {
        ID: "NI",
        LocalizedName: "Lower Saxony",
      },
    },
    {
      Version: 1,
      Key: "961310",
      Type: "City",
      Rank: 65,
      LocalizedName: "Herzele",
      Country: {
        ID: "BE",
        LocalizedName: "Belgium",
      },
      AdministrativeArea: {
        ID: "VOV",
        LocalizedName: "East Flanders",
      },
    },
    {
      Version: 1,
      Key: "2601340",
      Type: "City",
      Rank: 65,
      LocalizedName: "Herzebrock-Clarholz",
      Country: {
        ID: "DE",
        LocalizedName: "Germany",
      },
      AdministrativeArea: {
        ID: "NW",
        LocalizedName: "North Rhine-Westphalia",
      },
    },
    {
      Version: 1,
      Key: "312132",
      Type: "City",
      Rank: 75,
      LocalizedName: "Herzogenbuchsee",
      Country: {
        ID: "CH",
        LocalizedName: "Switzerland",
      },
      AdministrativeArea: {
        ID: "BE",
        LocalizedName: "Bern",
      },
    },
    {
      Version: 1,
      Key: "173468",
      Type: "City",
      Rank: 75,
      LocalizedName: "Herzberg",
      Country: {
        ID: "DE",
        LocalizedName: "Germany",
      },
      AdministrativeArea: {
        ID: "BB",
        LocalizedName: "Brandenburg",
      },
    },
    {
      Version: 1,
      Key: "3557848",
      Type: "City",
      Rank: 75,
      LocalizedName: "Herzogpark",
      Country: {
        ID: "DE",
        LocalizedName: "Germany",
      },
      AdministrativeArea: {
        ID: "BY",
        LocalizedName: "Bavaria",
      },
    },
    {
      Version: 1,
      Key: "179322",
      Type: "City",
      Rank: 75,
      LocalizedName: "Herzebrock",
      Country: {
        ID: "DE",
        LocalizedName: "Germany",
      },
      AdministrativeArea: {
        ID: "NW",
        LocalizedName: "North Rhine-Westphalia",
      },
    },
  ],
};

export const CurrentConditions = {
  data: {
    LocalObservationDateTime: "2020-11-20T13:46:00+02:00",
    EpochTime: 1605872760,
    WeatherText: "Mostly cloudy",
    WeatherIcon: 6,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 21.1,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 70,
        Unit: "F",
        UnitType: 18,
      },
    },
    MobileLink:
      "http://m.accuweather.com/en/il/herzliyya/215837/current-weather/215837?lang=en-us",
    Link:
      "http://www.accuweather.com/en/il/herzliyya/215837/current-weather/215837?lang=en-us",
  },
};

export const DailyForecasts = {
  data: {
    Headline: {
      EffectiveDate: "2020-11-25T19:00:00+02:00",
      EffectiveEpochDate: 1606323600,
      Severity: 5,
      Text: "Expect showery weather Wednesday evening through Thursday evening",
      Category: "rain",
      EndDate: "2020-11-27T01:00:00+02:00",
      EndEpochDate: 1606431600,
      MobileLink:
        "http://m.accuweather.com/en/il/herzliyya/215837/extended-weather-forecast/215837?unit=c&lang=en-us",
      Link:
        "http://www.accuweather.com/en/il/herzliyya/215837/daily-weather-forecast/215837?unit=c&lang=en-us",
    },
    DailyForecasts: [
      {
        Date: "2020-11-22T07:00:00+02:00",
        EpochDate: 1606021200,
        Temperature: {
          Minimum: {
            Value: 15.5,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 23.1,
            Unit: "C",
            UnitType: 17,
          },
        },
        Day: {
          Icon: 4,
          IconPhrase: "Intermittent clouds",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 35,
          IconPhrase: "Partly cloudy",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://m.accuweather.com/en/il/herzliyya/215837/daily-weather-forecast/215837?day=1&unit=c&lang=en-us",
        Link:
          "http://www.accuweather.com/en/il/herzliyya/215837/daily-weather-forecast/215837?day=1&unit=c&lang=en-us",
      },
      {
        Date: "2020-11-23T07:00:00+02:00",
        EpochDate: 1606107600,
        Temperature: {
          Minimum: {
            Value: 15.7,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 24.1,
            Unit: "C",
            UnitType: 17,
          },
        },
        Day: {
          Icon: 2,
          IconPhrase: "Mostly sunny",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 33,
          IconPhrase: "Clear",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://m.accuweather.com/en/il/herzliyya/215837/daily-weather-forecast/215837?day=2&unit=c&lang=en-us",
        Link:
          "http://www.accuweather.com/en/il/herzliyya/215837/daily-weather-forecast/215837?day=2&unit=c&lang=en-us",
      },
      {
        Date: "2020-11-24T07:00:00+02:00",
        EpochDate: 1606194000,
        Temperature: {
          Minimum: {
            Value: 16.1,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 25.7,
            Unit: "C",
            UnitType: 17,
          },
        },
        Day: {
          Icon: 6,
          IconPhrase: "Mostly cloudy",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 35,
          IconPhrase: "Partly cloudy",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://m.accuweather.com/en/il/herzliyya/215837/daily-weather-forecast/215837?day=3&unit=c&lang=en-us",
        Link:
          "http://www.accuweather.com/en/il/herzliyya/215837/daily-weather-forecast/215837?day=3&unit=c&lang=en-us",
      },
      {
        Date: "2020-11-25T07:00:00+02:00",
        EpochDate: 1606280400,
        Temperature: {
          Minimum: {
            Value: 15.7,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 24.1,
            Unit: "C",
            UnitType: 17,
          },
        },
        Day: {
          Icon: 3,
          IconPhrase: "Partly sunny",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 12,
          IconPhrase: "Showers",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Light",
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://m.accuweather.com/en/il/herzliyya/215837/daily-weather-forecast/215837?day=4&unit=c&lang=en-us",
        Link:
          "http://www.accuweather.com/en/il/herzliyya/215837/daily-weather-forecast/215837?day=4&unit=c&lang=en-us",
      },
      {
        Date: "2020-11-26T07:00:00+02:00",
        EpochDate: 1606366800,
        Temperature: {
          Minimum: {
            Value: 16.5,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 19,
            Unit: "C",
            UnitType: 17,
          },
        },
        Day: {
          Icon: 12,
          IconPhrase: "Showers",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Light",
        },
        Night: {
          Icon: 38,
          IconPhrase: "Mostly cloudy",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Light",
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://m.accuweather.com/en/il/herzliyya/215837/daily-weather-forecast/215837?day=5&unit=c&lang=en-us",
        Link:
          "http://www.accuweather.com/en/il/herzliyya/215837/daily-weather-forecast/215837?day=5&unit=c&lang=en-us",
      },
    ],
  },
};
