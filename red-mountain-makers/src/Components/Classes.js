import React, { Component } from 'react';
import '../css/App.css';
import '../css/materialize.css'
import '../css/Classes.css'
var tokenReq = {
    host: "eventbriteapi.com",
    path: "/v3/users/me/?token=GS3SVXQ6SKYYRQXFQL36",
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer token"
    }
};
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: {
                'events': [
                    {
                        "id": "12345",
                        "name": {
                          "text": "Some text",
                          "html": "<p>Some text</p>"
                        },
                        "description": {
                          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod justo eget tellus pellentesque maximus. Morbi in odio vel orci rhoncus elementum. Proin mollis felis dolor, vitae interdum risus gravida egestas. Cras imperdiet gravida nunc, id molestie augue tincidunt pulvinar. Fusce accumsan pretium nulla eu bibendum. Praesent et scelerisque nisl, et commodo felis. Fusce placerat dolor ac magna aliquet, nec porta massa pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
                          "html": "<p>Some text</p>"
                        },
                        "start": {
                          "timezone": "America/Los_Angeles",
                          "utc": "2018-05-12T02:00:00Z",
                          "local": "2018-05-11T19:00:00"
                        },
                        "end": {
                          "timezone": "America/Los_Angeles",
                          "utc": "2018-05-12T02:00:00Z",
                          "local": "2018-05-11T19:00:00"
                        },
                        "url": "https://www.eventbrite.com/e/45263283700",
                        "vanity_url": "https://testevent.eventbrite.com",
                        "created": "2017-02-19T20:28:14Z",
                        "changed": "2017-02-19T20:28:14Z",
                        "status": "live",
                        "currency": "USD",
                        "online_event": false,
                        "organization_id": "",
                        "organizer_id": "",
                        "organizer": {
                          "name": "",
                          "description": {
                            "text": "Some text",
                            "html": "<p>Some text</p>"
                          },
                          "long_description": {
                            "text": "Some text",
                            "html": "<p>Some text</p>"
                          },
                          "logo_id": {},
                          "logo": {
                            "id": "12345",
                            "url": "https://image.com",
                            "crop_mask": {
                              "top_left": {
                                "y": 15,
                                "x": 15
                              },
                              "width": 15,
                              "height": 15
                            },
                            "original": {
                              "url": "https://image.com",
                              "width": 800,
                              "height": 400
                            },
                            "aspect_ratio": "2",
                            "edge_color": "#6a7c8b",
                            "edge_color_set": true
                          },
                          "resource_uri": "https://www.eventbriteapi.com/v3/organizers/12345/",
                          "id": "12345",
                          "url": "https://www.eventbrite.com/o/12345/",
                          "num_past_events": 5,
                          "num_future_events": 1,
                          "twitter": "@abc",
                          "facebook": "abc"
                        },
                        "logo_id": {},
                        "logo": {
                          "id": "12345",
                          "url": "https://image.com",
                          "crop_mask": {
                            "top_left": {
                              "y": 15,
                              "x": 15
                            },
                            "width": 15,
                            "height": 15
                          },
                          "original": {
                            "url": "https://image.com",
                            "width": 800,
                            "height": 400
                          },
                          "aspect_ratio": "2",
                          "edge_color": "#6a7c8b",
                          "edge_color_set": true
                        },
                        "venue": {
                          "name": "Great Venue",
                          "age_restriction": {},
                          "capacity": 100,
                          "address": {
                            "address_1": "",
                            "address_2": "",
                            "city": "",
                            "region": "",
                            "postal_code": "",
                            "country": "",
                            "latitude": "",
                            "longitude": "",
                            "localized_address_display": "",
                            "localized_area_display": "",
                            "localized_multi_line_address_display": []
                          },
                          "resource_uri": "https://www.eventbriteapi.com/v3/venues/3003/",
                          "id": "3003",
                          "latitude": "49.28497549999999",
                          "longitude": "123.11082529999999"
                        },
                        "format_id": {},
                        "format": {
                          "id": "2",
                          "name": "Seminar or Talk",
                          "name_localized": "Seminar or Talk",
                          "short_name": "Seminar",
                          "short_name_localized": "Seminar",
                          "resource_uri": "https://www.eventbriteapi.com/v3/formats/2/"
                        },
                        "category_id": {},
                        "category": {
                          "id": "103",
                          "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                          "name": "Music",
                          "name_localized": "Music",
                          "short_name": "Music",
                          "short_name_localized": "Music",
                          "subcategories": [
                            {
                              "id": "3003",
                              "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3003/",
                              "name": "Classical",
                              "parent_category": {}
                            }
                          ]
                        },
                        "subcategory_id": {},
                        "subcategory": {
                          "id": "3003",
                          "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3003/",
                          "name": "Classical",
                          "parent_category": {
                            "id": "103",
                            "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                            "name": "Music",
                            "name_localized": "Music",
                            "short_name": "Music",
                            "short_name_localized": "Music",
                            "subcategories": [
                              {}
                            ]
                          }
                        },
                        "music_properties": {
                          "age_restriction": "all_ages",
                          "presented_by": {}
                        },
                        "bookmark_info": {
                          "bookmarked": false
                        },
                        "ticket_availability": {
                          "has_available_tickets": true,
                          "minimum_ticket_price": {
                            "currency": "USD",
                            "value": 432,
                            "major_value": "4.32",
                            "display": "4.32 USD"
                          },
                          "maximum_ticket_price": {
                            "currency": "USD",
                            "value": 432,
                            "major_value": "4.32",
                            "display": "4.32 USD"
                          },
                          "is_sold_out": true,
                          "start_sales_date": {
                            "timezone": "America/Los_Angeles",
                            "utc": "2018-05-12T02:00:00Z",
                            "local": "2018-05-11T19:00:00"
                          }
                        },
                        "listed": false,
                        "shareable": false,
                        "invite_only": false,
                        "show_remaining": true,
                        "password": "12345",
                        "capacity": 100,
                        "capacity_is_custom": true,
                        "tx_time_limit": "12345",
                        "hide_start_date": true,
                        "hide_end_date": true,
                        "locale": "en_US",
                        "is_locked": true,
                        "privacy_setting": "unlocked",
                        "is_externally_ticketed": false,
                        "is_series": true,
                        "is_series_parent": true,
                        "is_reserved_seating": true,
                        "show_pick_a_seat": true,
                        "show_seatmap_thumbnail": true,
                        "show_colors_in_seatmap_thumbnail": true,
                        "is_free": true,
                        "source": "api",
                        "version": "null",
                        "resource_uri": "https://www.eventbriteapi.com/v3/events/1234/"
                      },
                      {
                        "id": "12345",
                        "name": {
                          "text": "Some text",
                          "html": "<p>Some text</p>"
                        },
                        "description": {
                          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod justo eget tellus pellentesque maximus. Morbi in odio vel orci rhoncus elementum. Proin mollis felis dolor, vitae interdum risus gravida egestas. Cras imperdiet gravida nunc, id molestie augue tincidunt pulvinar. Fusce accumsan pretium nulla eu bibendum. Praesent et scelerisque nisl, et commodo felis.",
                          "html": "<p>Some text</p>"
                        },
                        "start": {
                          "timezone": "America/Los_Angeles",
                          "utc": "2018-05-12T02:00:00Z",
                          "local": "2018-05-11T19:00:00"
                        },
                        "end": {
                          "timezone": "America/Los_Angeles",
                          "utc": "2018-05-12T02:00:00Z",
                          "local": "2018-05-11T19:00:00"
                        },
                        "url": "https://www.eventbrite.com/e/45263283700",
                        "vanity_url": "https://testevent.eventbrite.com",
                        "created": "2017-02-19T20:28:14Z",
                        "changed": "2017-02-19T20:28:14Z",
                        "status": "live",
                        "currency": "USD",
                        "online_event": false,
                        "organization_id": "",
                        "organizer_id": "",
                        "organizer": {
                          "name": "",
                          "description": {
                            "text": "Some text",
                            "html": "<p>Some text</p>"
                          },
                          "long_description": {
                            "text": "Some text",
                            "html": "<p>Some text</p>"
                          },
                          "logo_id": {},
                          "logo": {
                            "id": "12345",
                            "url": "https://image.com",
                            "crop_mask": {
                              "top_left": {
                                "y": 15,
                                "x": 15
                              },
                              "width": 15,
                              "height": 15
                            },
                            "original": {
                              "url": "https://image.com",
                              "width": 800,
                              "height": 400
                            },
                            "aspect_ratio": "2",
                            "edge_color": "#6a7c8b",
                            "edge_color_set": true
                          },
                          "resource_uri": "https://www.eventbriteapi.com/v3/organizers/12345/",
                          "id": "12345",
                          "url": "https://www.eventbrite.com/o/12345/",
                          "num_past_events": 5,
                          "num_future_events": 1,
                          "twitter": "@abc",
                          "facebook": "abc"
                        },
                        "logo_id": {},
                        "logo": {
                          "id": "12345",
                          "url": "https://image.com",
                          "crop_mask": {
                            "top_left": {
                              "y": 15,
                              "x": 15
                            },
                            "width": 15,
                            "height": 15
                          },
                          "original": {
                            "url": "https://image.com",
                            "width": 800,
                            "height": 400
                          },
                          "aspect_ratio": "2",
                          "edge_color": "#6a7c8b",
                          "edge_color_set": true
                        },
                        "venue": {
                          "name": "Great Venue",
                          "age_restriction": {},
                          "capacity": 100,
                          "address": {
                            "address_1": "",
                            "address_2": "",
                            "city": "",
                            "region": "",
                            "postal_code": "",
                            "country": "",
                            "latitude": "",
                            "longitude": "",
                            "localized_address_display": "",
                            "localized_area_display": "",
                            "localized_multi_line_address_display": []
                          },
                          "resource_uri": "https://www.eventbriteapi.com/v3/venues/3003/",
                          "id": "3003",
                          "latitude": "49.28497549999999",
                          "longitude": "123.11082529999999"
                        },
                        "format_id": {},
                        "format": {
                          "id": "2",
                          "name": "Seminar or Talk",
                          "name_localized": "Seminar or Talk",
                          "short_name": "Seminar",
                          "short_name_localized": "Seminar",
                          "resource_uri": "https://www.eventbriteapi.com/v3/formats/2/"
                        },
                        "category_id": {},
                        "category": {
                          "id": "103",
                          "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                          "name": "Music",
                          "name_localized": "Music",
                          "short_name": "Music",
                          "short_name_localized": "Music",
                          "subcategories": [
                            {
                              "id": "3003",
                              "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3003/",
                              "name": "Classical",
                              "parent_category": {}
                            }
                          ]
                        },
                        "subcategory_id": {},
                        "subcategory": {
                          "id": "3003",
                          "resource_uri": "https://www.eventbriteapi.com/v3/subcategories/3003/",
                          "name": "Classical",
                          "parent_category": {
                            "id": "103",
                            "resource_uri": "https://www.eventbriteapi.com/v3/categories/103/",
                            "name": "Music",
                            "name_localized": "Music",
                            "short_name": "Music",
                            "short_name_localized": "Music",
                            "subcategories": [
                              {}
                            ]
                          }
                        },
                        "music_properties": {
                          "age_restriction": "all_ages",
                          "presented_by": {}
                        },
                        "bookmark_info": {
                          "bookmarked": false
                        },
                        "ticket_availability": {
                          "has_available_tickets": true,
                          "minimum_ticket_price": {
                            "currency": "USD",
                            "value": 432,
                            "major_value": "4.32",
                            "display": "4.32 USD"
                          },
                          "maximum_ticket_price": {
                            "currency": "USD",
                            "value": 432,
                            "major_value": "4.32",
                            "display": "4.32 USD"
                          },
                          "is_sold_out": true,
                          "start_sales_date": {
                            "timezone": "America/Los_Angeles",
                            "utc": "2018-05-12T02:00:00Z",
                            "local": "2018-05-11T19:00:00"
                          }
                        },
                        "listed": false,
                        "shareable": false,
                        "invite_only": false,
                        "show_remaining": true,
                        "password": "12345",
                        "capacity": 100,
                        "capacity_is_custom": true,
                        "tx_time_limit": "12345",
                        "hide_start_date": true,
                        "hide_end_date": true,
                        "locale": "en_US",
                        "is_locked": true,
                        "privacy_setting": "unlocked",
                        "is_externally_ticketed": false,
                        "is_series": true,
                        "is_series_parent": true,
                        "is_reserved_seating": true,
                        "show_pick_a_seat": true,
                        "show_seatmap_thumbnail": true,
                        "show_colors_in_seatmap_thumbnail": true,
                        "is_free": true,
                        "source": "api",
                        "version": "null",
                        "resource_uri": "https://www.eventbriteapi.com/v3/events/1234/"
                      }
                ]
            }
        };
    }
    componentDidMount() {
        /*fetch("eventbriteapi.com/v3/organizations/57623670951/events/?token=FHLUZYFIPS7BLMZVXO")
            .then((response) => {
                console.log(response.json());
            })
            .then((people) => {
                console.log(people)
            });*/
    }
    render() {
        return (
            <div>
                <body>

                    <h3>Classes at the Space</h3>
                    <div id="content" className="page-wrap">
                        <li><a className="black-text text-darken-2" href="#"> Tool Training: WoodShop 101</a></li>
                        <li><a className="black-text text-darken-2" href="#">Tool Training: Learn to Wield</a></li>
                        <li><a className="black-text text-darken-2" href="#">Tool Training: 3D Printers</a></li>
                        <li><a className="black-text text-darken-2" href="#">Tool Training: 3D Modeling</a></li>
                        <li><a className="black-text text-darken-2" href="#">Programming and Hardware</a></li>
                        <li><a className="black-text text-darken-2" href="#">Fibers!</a></li>
                        <li><a className="black-text text-darken-2" href="#">Bike Technology</a></li>
                        <li><a className="black-text text-darken-2" href="#">Wearable Technology</a></li>
                        <li><a className="black-text text-darken-2" href="#">Ceramics</a></li>
                        <li><a className="black-text text-darken-2" href="#">Cosplay!</a></li>
                    </div>
                </body>
                <h3>Classes at the Space</h3>
                <div className="page-wrap">
                    {this.state.people.events.map(v => {
                        return (<div id="ClassPage">
                            <h5>{v.name.text}</h5>
                            <p>{v.description.text}</p>
                        </div>)
                    })}
                </div>
            </div>
        );
    }
}

