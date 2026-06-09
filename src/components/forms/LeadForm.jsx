"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LeadForm({
  title,
  description,
  buttonText,
  showBusinessFields = false,
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Form submitted successfully!");

    setFormData({
      fullName: "",
      phone: "",
      email: "",
      city: "",
      message: "",
    });
  };

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>

          <p className="mt-4 text-slate-600 text-lg">{description}</p>
        </div>

        {/* Form */}
        <div className="mt-10 rounded-3xl border bg-white p-6 md:p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Full Name
              </label>

              <Input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Mobile Number
              </label>

              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter mobile number"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email Address
              </label>

              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">City</label>

              <Input
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Message</label>

              <Textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more..."
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">City</label>

              <Input
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
              />
            </div>

            {/* Distributor Fields */}
            {showBusinessFields && (
              <>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Occupation
                  </label>

                  <Input name="occupation" placeholder="Enter occupation" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Business Experience
                  </label>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="none">No Experience</SelectItem>

                      <SelectItem value="sales">Sales Experience</SelectItem>

                      <SelectItem value="direct-selling">
                        Direct Selling Experience
                      </SelectItem>

                      <SelectItem value="business-owner">
                        Business Owner
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Preferred Contact Time
                  </label>

                  <Input
                    name="contactTime"
                    placeholder="Example: 6 PM - 8 PM"
                  />
                </div>
              </>
            )}

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-medium">Message</label>

              <Textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more..."
              />
            </div>

            <Button type="submit" className="w-full h-11">
              {buttonText}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
